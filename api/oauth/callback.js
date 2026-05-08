function renderAuthMessage(type, payload) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SESO CMS Login</title>
  </head>
  <body>
    <p id="status">Completing GitHub login...</p>
    <script>
      const payload = ${JSON.stringify(payload)};
      const type = ${JSON.stringify(type)};
      const message = "authorization:github:" + type + ":" + JSON.stringify(payload);
      const status = document.getElementById("status");

      function sendAuthorization(event) {
        if (window.opener) {
          window.opener.postMessage(message, event.origin);
          status.innerText = "Login complete. Returning to CMS...";
          window.setTimeout(function () {
            window.close();
          }, 500);
        } else {
          status.innerText = "Login complete, but the CMS window could not be found. Please close this window and try again from /admin/.";
        }
      }

      if (window.opener) {
        window.addEventListener("message", sendAuthorization, false);
        window.opener.postMessage("authorizing:github", "*");
        window.setTimeout(function () {
          status.innerText = "Still waiting for the CMS window. If this stays here, close this popup and retry from /admin/.";
        }, 3000);
      } else {
        status.innerText = "Login complete, but this window was not opened by the CMS. Please start again from /admin/.";
      }
    </script>
  </body>
</html>`;
}

function getCookie(req, name) {
  const cookies = req.headers.cookie || "";
  const match = cookies.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : "";
}

module.exports = async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET;
  const { code, state } = req.query || {};
  const expectedState = getCookie(req, "cms_oauth_state");

  if (!clientId || !clientSecret) {
    return res.status(500).send(renderAuthMessage("error", { error: "Missing GitHub OAuth configuration" }));
  }

  if (!code || !state || state !== expectedState) {
    return res.status(400).send(renderAuthMessage("error", { error: "Invalid OAuth state" }));
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const tokenResponse = await response.json();

    if (!response.ok || !tokenResponse.access_token) {
      return res.status(400).send(renderAuthMessage("error", { error: tokenResponse.error || "OAuth token exchange failed" }));
    }

    res.setHeader("Set-Cookie", "cms_oauth_state=; Path=/api/oauth; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
    return res.status(200).send(renderAuthMessage("success", { token: tokenResponse.access_token, provider: "github" }));
  } catch (error) {
    console.error("CMS OAuth callback failed", error);
    return res.status(500).send(renderAuthMessage("error", { error: "OAuth callback failed" }));
  }
};
