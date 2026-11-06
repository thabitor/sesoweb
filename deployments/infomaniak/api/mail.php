<?php
declare(strict_types=1);

function seso_mail_ready(array $config): bool
{
    $required = match ($config['mail_transport'] ?? '') {
        'graph' => ['microsoft_tenant_id', 'microsoft_client_id', 'microsoft_client_secret'],
        'smtp' => ['smtp_host', 'smtp_user', 'smtp_password'],
        default => [],
    };
    if (!$required) return false;
    foreach (array_merge($required, ['contact_from', 'contact_to']) as $field) {
        if (!is_string($config[$field] ?? null) || trim($config[$field]) === '') return false;
    }
    return filter_var($config['contact_from'], FILTER_VALIDATE_EMAIL) !== false
        && filter_var($config['contact_to'], FILTER_VALIDATE_EMAIL) !== false;
}

function seso_send_mail(array $config, array $fields): void
{
    $subject = 'Nouveau message via SESO - ' . $fields['name'];
    $body = implode("\n", [
        'Nom: ' . $fields['name'],
        'Email: ' . $fields['email'],
        'Telephone: ' . $fields['tel'],
        'Service: ' . $fields['service'],
        '', 'Message:', $fields['message'],
    ]);
    if ($config['mail_transport'] === 'graph') {
        $tenant = $config['microsoft_tenant_id'];
        if (!preg_match('/^[a-f0-9-]{36}$/iD', $tenant)) {
            throw new RuntimeException('Invalid Microsoft tenant');
        }
        $token = seso_post('https://login.microsoftonline.com/' . $tenant . '/oauth2/v2.0/token', http_build_query([
            'client_id' => $config['microsoft_client_id'],
            'client_secret' => $config['microsoft_client_secret'],
            'grant_type' => 'client_credentials',
            'scope' => 'https://graph.microsoft.com/.default',
        ]), ['Content-Type: application/x-www-form-urlencoded']);
        if (empty($token['access_token'])) {
            throw new RuntimeException('Microsoft token missing');
        }
        seso_post('https://graph.microsoft.com/v1.0/users/' . rawurlencode($config['contact_from']) . '/sendMail', json_encode([
            'message' => [
                'subject' => $subject,
                'body' => ['contentType' => 'Text', 'content' => $body],
                'toRecipients' => [['emailAddress' => ['address' => $config['contact_to']]]],
                'replyTo' => [['emailAddress' => ['address' => $fields['email'], 'name' => $fields['name']]]],
            ],
            'saveToSentItems' => true,
        ], JSON_THROW_ON_ERROR), [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $token['access_token'],
        ]);
        return;
    }

    require_once seso_private_directory() . '/vendor/autoload.php';
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->Port = (int) ($config['smtp_port'] ?? 587);
    if (!in_array($mail->Port, [465, 587], true)) {
        throw new RuntimeException('Unsupported SMTP port');
    }
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = $mail->Port === 465 ? 'ssl' : 'tls';
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_password'];
    $mail->Timeout = 20;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['contact_from'], 'SESO');
    $mail->addAddress($config['contact_to']);
    $mail->addReplyTo($fields['email'], $fields['name']);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->send();
}
