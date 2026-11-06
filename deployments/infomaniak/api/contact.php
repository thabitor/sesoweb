<?php
declare(strict_types=1);
require __DIR__ . '/common.php';
require __DIR__ . '/mail.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    seso_json(405, ['status' => 'fail', 'message' => 'Method not allowed']);
}
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) {
    seso_json(415, ['status' => 'fail', 'message' => 'JSON required']);
}
$config = seso_config();
try {
    $origin = seso_origin($config);
} catch (Throwable $error) {
    seso_json(503, ['status' => 'fail', 'message' => 'Contact service is not configured yet']);
}
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] !== $origin) {
    seso_json(403, ['status' => 'fail', 'message' => 'Invalid origin']);
}
$raw = file_get_contents('php://input', false, null, 0, 16385);
if ($raw === false || strlen($raw) > 16384) {
    seso_json(413, ['status' => 'fail', 'message' => 'Submission too large']);
}
try {
    $input = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
} catch (JsonException $error) {
    seso_json(400, ['status' => 'fail', 'message' => 'Invalid JSON']);
}
if (!is_array($input)) {
    seso_json(400, ['status' => 'fail', 'message' => 'Invalid submission']);
}
$fields = [];
foreach (['name' => 200, 'email' => 254, 'tel' => 100, 'service' => 200, 'message' => 5000] as $field => $limit) {
    $value = $input[$field] ?? '';
    if (!is_string($value) || strlen($value) > $limit) {
        seso_json(400, ['status' => 'fail', 'message' => 'Invalid submission']);
    }
    $fields[$field] = trim($value);
}
if ($fields['name'] === '' || $fields['message'] === ''
    || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL)
    || preg_match('/[\r\n]/', $fields['name'])) {
    seso_json(400, ['status' => 'fail', 'message' => 'Invalid submission']);
}
if (!seso_mail_ready($config)) {
    seso_json(503, ['status' => 'fail', 'message' => 'Contact service is not configured yet']);
}

try {
    // Keep counters outside the web root, without storing submitted messages.
    $directory = seso_private_directory() . '/rate-limits';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Could not create rate-limit directory');
    }
    $counter = fopen($directory . '/' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown'), 'c+');
    if ($counter === false || !flock($counter, LOCK_EX)) {
        throw new RuntimeException('Could not lock contact counter');
    }
    $record = json_decode(stream_get_contents($counter), true) ?: ['start' => time(), 'count' => 0];
    if (time() - $record['start'] >= 600) {
        $record = ['start' => time(), 'count' => 0];
    }
    if ($record['count'] >= 5) {
        flock($counter, LOCK_UN);
        fclose($counter);
        header('Retry-After: 600');
        seso_json(429, ['status' => 'fail', 'message' => 'Please try again later']);
    }
    $record['count']++;
    rewind($counter);
    ftruncate($counter, 0);
    fwrite($counter, json_encode($record, JSON_THROW_ON_ERROR));
    flock($counter, LOCK_UN);
    fclose($counter);

    seso_send_mail($config, $fields);
    seso_json(200, ['status' => 'success']);
} catch (Throwable $error) {
    error_log('SESO contact delivery failed: ' . get_class($error));
    seso_json(502, ['status' => 'fail', 'message' => 'Email could not be sent']);
}
