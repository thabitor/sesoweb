<?php
declare(strict_types=1);
require __DIR__ . '/common.php';

$config = seso_config();
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    header('Allow: GET');
    seso_json(405, ['status' => 'fail', 'message' => 'Method not allowed']);
}
if (empty($config['github_client_id']) || empty($config['github_client_secret'])) {
    seso_json(503, ['status' => 'fail', 'message' => 'CMS authentication is not configured yet']);
}

try {
    $origin = seso_origin($config);
    $state = bin2hex(random_bytes(32));
    setcookie('cms_oauth_state', $state, [
        'expires' => time() + 600,
        'path' => '/api/oauth',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    $params = http_build_query([
        'client_id' => $config['github_client_id'],
        'redirect_uri' => $origin . '/api/oauth/callback',
        'scope' => 'repo',
        'state' => $state,
    ]);
    header('Cache-Control: no-store');
    header('Location: https://github.com/login/oauth/authorize?' . $params, true, 302);
} catch (Throwable $error) {
    error_log('SESO OAuth initialization failed');
    seso_json(503, ['status' => 'fail', 'message' => 'CMS authentication is unavailable']);
}
