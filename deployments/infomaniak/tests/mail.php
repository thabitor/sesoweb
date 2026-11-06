<?php
declare(strict_types=1);

// Exercise message construction without contacting Microsoft or sending email.
$requests = [];
function seso_post(string $url, string $body, array $headers): array
{
    global $requests;
    $requests[] = compact('url', 'body', 'headers');
    return count($requests) === 1 ? ['access_token' => 'test-token'] : [];
}
require dirname(__DIR__) . '/api/mail.php';

function check(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}

$config = [
    'mail_transport' => 'graph',
    'microsoft_tenant_id' => '11111111-1111-1111-1111-111111111111',
    'microsoft_client_id' => 'test-client',
    'microsoft_client_secret' => 'test-secret',
    'contact_from' => 'sender@example.test',
    'contact_to' => 'recipient@example.test',
];
check(!seso_mail_ready([]), 'Empty configuration must not allow mail');
check(seso_mail_ready($config), 'Complete configuration should be ready');
seso_send_mail($config, [
    'name' => 'Visitor', 'email' => 'visitor@example.test', 'tel' => '',
    'service' => 'SSG', 'message' => '<script>plain text only</script>',
]);
check(count($requests) === 2, 'Expected token exchange followed by one send request');
parse_str($requests[0]['body'], $tokenRequest);
check($tokenRequest['grant_type'] === 'client_credentials', 'Use application authentication');
check($tokenRequest['scope'] === 'https://graph.microsoft.com/.default', 'Restrict token audience');
check($requests[1]['url'] === 'https://graph.microsoft.com/v1.0/users/sender%40example.test/sendMail', 'Sender must come from server configuration');
$message = json_decode($requests[1]['body'], true, 32, JSON_THROW_ON_ERROR)['message'];
check($message['toRecipients'][0]['emailAddress']['address'] === 'recipient@example.test', 'Recipient must come from server configuration');
check($message['replyTo'][0]['emailAddress']['address'] === 'visitor@example.test', 'Visitor should only be the reply-to address');
check($message['body']['contentType'] === 'Text', 'Visitor content must be plain text');
echo "Mail transport checks passed; no messages sent.\n";
