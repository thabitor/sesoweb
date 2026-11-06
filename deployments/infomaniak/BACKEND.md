# Contact and CMS backend on Infomaniak

PHP 8.1+ with curl and JSON is required. No Node server is needed.
Backend files live in the website's `api/` directory. The root `.htaccess`
maps /api/contact, /api/oauth and /api/oauth/callback to their PHP handlers.

## Private configuration

Install `config.example.php` as `~/seso-private/config.php`, alongside the
`web` directory, never inside the public site directory. Set directory
permissions to 700 and config permissions to 600. Fill the values through
SFTP or a secure server editor. Never commit the real config or paste
passwords into chat.

For SMTP support, place composer.json in `~/seso-private/` and run
`composer install --no-dev --prefer-dist --no-interaction --no-scripts` there.
The resulting vendor directory stays private too.

## GitHub login

Create a separate OAuth app at https://github.com/settings/applications/new
so the existing Vercel login remains available during migration:

- Application name: CMS SESO Infomaniak
- Homepage URL: https://test9.paidisk.be
- Authorization callback URL: https://test9.paidisk.be/api/oauth/callback

Copy the Client ID and Client Secret into `github_client_id` and
`github_client_secret` in the private server config. The secret is never
sent to the browser. OAuth messages are restricted to the configured origin.
The site_url must exactly match the CMS origin, including HTTPS.

## Office 365 contact email

The recipient and sender default to info@seso.be. Choose one transport;
the mailbox's provider remains Microsoft 365 after the website migration.

### Microsoft Graph

Set mail_transport to `graph`. A Microsoft 365 administrator must register
a single-tenant application in Microsoft Entra and configure permission to
send email. For the application-permissions setup, Microsoft Graph Mail.Send
requires administrator consent. Restrict the application's mailbox access
to info@seso.be using Exchange application access policy or application RBAC.
No Mail.Read permission is needed. Fill microsoft_tenant_id,
microsoft_client_id and microsoft_client_secret in the private config.
Track the secret's expiry and rotate it before it expires.

Reference: https://learn.microsoft.com/en-us/graph/api/user-sendmail

### Existing SMTP

Set mail_transport to `smtp` only if SMTP AUTH is already permitted for
the account. Fill smtp_host, smtp_port, smtp_user and smtp_password from
the existing working configuration. Office 365 commonly uses
smtp.office365.com on port 587 with STARTTLS. Do not disable MFA or tenant
security defaults to make password authentication work; use Graph instead.

## Cutover after configuration

While credentials are being configured, keep the temporary admin redirect
and the REACT_APP_CONTACT_SITE build variable so the existing functions work.

When each service is ready:

1. Verify /api/oauth redirects to GitHub and the callback validates state.
2. Remove the temporary admin redirect, then verify login from /admin/.
3. Remove REACT_APP_CONTACT_SITE from the Infomaniak build environment.
4. Rebuild and deploy, then submit a test through /contact and confirm receipt.
5. Activate GitHub Actions uploads so future CMS edits update this host.

Missing credentials return HTTP 503. Invalid form data returns HTTP 400,
unsupported methods return HTTP 405, and contact submissions are limited to
five attempts per client IP per ten minutes. No message content is logged.
SMTP acceptance or Graph HTTP 202 alone does not prove inbox delivery.
