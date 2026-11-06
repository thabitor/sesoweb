<?php
declare(strict_types=1);
require __DIR__ . '/common.php';

$config = seso_config();
try {
    $origin = seso_origin($config);
} catch (Throwable $error) {
    seso_json(503, ['status' => 'fail', 'message' => 'CMS authentication is not configured yet']);
}
$state = $_GET['state'] ?? '';
$expectedState = $_COOKIE['cms_oauth_state'] ?? '';
$code = $_GET['code'] ?? '';
setcookie('cms_oauth_state', '', [
    'expires' => time() - 3600,
    'path' => '/api/oauth',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Lax',
]);

if (!is_string($state) || !is_string($code) || $state === '' || $code === ''
    || $expectedState === '' || !hash_equals($expectedState, $state)) {
    seso_auth_page('error', ['error' => 'Invalid OAuth state. Please retry from the CMS.'], $origin, 400);
}
if (empty($config['github_client_id']) || empty($config['github_client_secret'])) {
    seso_auth_page('error', ['error' => 'CMS authentication is not configured yet'], $origin, 503);
}

try {
    $token = seso_post('https://github.com/login/oauth/access_token', http_build_query([
        'client_id' => $config['github_client_id'],
        'client_secret' => $config['github_client_secret'],
        'code' => $code,
        'redirect_uri' => $origin . '/api/oauth/callback',
    ]), ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded']);
    if (empty($token['access_token'])) {
        throw new RuntimeException('OAuth token missing');
    }
    seso_auth_page('success', ['token' => $token['access_token'], 'provider' => 'github'], $origin);
} catch (Throwable $error) {
    error_log('SESO OAuth token exchange failed');
    seso_auth_page('error', ['error' => 'GitHub login failed. Please retry from the CMS.'], $origin, 502);
}
