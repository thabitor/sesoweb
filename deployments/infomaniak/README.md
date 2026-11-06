# Infomaniak frontend migration

This stage hosts the React frontend on Infomaniak Standard Web Hosting.
The contact form opens on https://sesoweb.vercel.app/contact and /admin
redirects to the existing Vercel CMS. Keep the Vercel project running.
No backend or OAuth configuration is migrated in this stage.

## Current test target

- Website: https://test9.paidisk.be
- FTP directory shown in Manager: `/web/sesotest`
- Actual SSH web root: `/home/clients/15e735a98c5570e63b013b94e054a139/web/sesotest`

Use the actual SSH path for `INFOMANIAK_WEB_ROOT`.

## Hosting setup

Create a dedicated site directory in Infomaniak Manager, enable HTTPS,
and enable SSH for the deployment account. Confirm its absolute web root.
Back up any existing files before the first upload: matching filenames,
including .htaccess and index.html, will be replaced. Other files are not deleted.
Deploy to a test domain first, then change the public domain when verified.
The site must be served at the domain root, not a subdirectory.

## GitHub configuration

Create an environment named `infomaniak` in the repository settings.
Add these environment secrets:

- `INFOMANIAK_HOST`: SSH hostname from the hosting manager.
- `INFOMANIAK_USER`: SSH username.
- `INFOMANIAK_SSH_KEY`: dedicated deployment private key; install its public key on Infomaniak.
- `INFOMANIAK_KNOWN_HOSTS`: SSH known_hosts entry, with its fingerprint verified independently.
- `INFOMANIAK_WEB_ROOT`: absolute path of the dedicated website directory.

The workflow requires SSH on port 22 and rsync on the server.
Do not commit private keys or passwords.

## First deployment

Run `Build and deploy to Infomaniak` manually in GitHub Actions.
Every main-branch push builds a downloadable `seso-infomaniak` artifact.
To also upload on every push, set the repository Actions variable
`INFOMANIAK_DEPLOY_ENABLED` to `true` after the first deployment is verified.
CMS saves to main will then publish automatically as well.

Check the homepage, /ssg, /aboutus#historique, language switching,
images, /contact (form link to Vercel), and /admin (redirect to Vercel).
The workflow uploads index.html last and keeps older asset files.

## Manual upload alternative

Download the build artifact and upload its contents, including `.htaccess`,
to the site's web root through SFTP. Upload the contents, not a build folder.
Never upload node_modules, source files, or environment files.
