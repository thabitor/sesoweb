<?php
declare(strict_types=1);
ini_set('display_errors', '0');

function seso_private_directory(): string
{
    return dirname(__DIR__, 3) . '/seso-private';
}

function seso_config(): array
{
    $path = seso_private_directory() . '/config.php';
    return is_file($path) ? require $path : [];
}

function seso_json(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    exit;
}

function seso_origin(array $config): string
{
    $origin = rtrim($config['site_url'] ?? '', '/');
    if (!preg_match('~^https://[a-zA-Z0-9.-]+$~D', $origin)) {
        throw new RuntimeException('Invalid site origin');
    }
    return $origin;
}

function seso_post(string $url, string $body, array $headers): array
{
    $request = curl_init($url);
    curl_setopt_array($request, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 25,
        CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
    ]);
    $response = curl_exec($request);
    $status = curl_getinfo($request, CURLINFO_RESPONSE_CODE);
    curl_close($request);
    if ($response === false || $status < 200 || $status >= 300) {
        throw new RuntimeException('Upstream request failed: HTTP ' . $status);
    }
    return $response === '' ? [] : json_decode($response, true, 32, JSON_THROW_ON_ERROR);
}

function seso_auth_page(string $type, array $payload, string $origin, int $status = 200): never
{
    http_response_code($status);
    $nonce = base64_encode(random_bytes(24));
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    header('Referrer-Policy: no-referrer');
    header('X-Content-Type-Options: nosniff');
    header("Content-Security-Policy: default-src 'none'; script-src 'nonce-$nonce'; frame-ancestors 'none'; base-uri 'none'");
    $flags = JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_THROW_ON_ERROR;
    $encodedOrigin = json_encode($origin, $flags);
    $encodedMessage = json_encode('authorization:github:' . $type . ':' . json_encode($payload, $flags), $flags);
    echo '<!doctype html><html lang="fr"><meta charset="utf-8"><title>CMS SESO</title>';
    echo '<p id="status">Connexion GitHub en cours...</p><script nonce="' . $nonce . '">';
    echo 'const origin=' . $encodedOrigin . ';const message=' . $encodedMessage . ';';
    echo <<<'JS'
const status = document.getElementById('status');
if (window.opener) {
    window.addEventListener('message', function receive(event) {
        if (event.origin !== origin || event.source !== window.opener || event.data !== 'authorizing:github') return;
        window.removeEventListener('message', receive);
        window.opener.postMessage(message, origin);
        status.textContent = 'Retour au CMS...';
        window.setTimeout(function () { window.close(); }, 1200);
    });
    window.opener.postMessage('authorizing:github', origin);
    window.setTimeout(function () {
        status.textContent = 'Si cette fenetre reste ouverte, fermez-la et relancez la connexion depuis le CMS.';
    }, 5000);
} else {
    status.textContent = 'Veuillez lancer la connexion depuis la page /admin/ du site.';
}
JS;
    echo '</script></html>';
    exit;
}
