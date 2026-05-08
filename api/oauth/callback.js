function renderAuthMessage(type, payload) {
  return `<!doctype html>
<html>
  <body>
    <script>
      const payload = ${JSON.stringify(payload)};
      const type = ${JSON.stringify(type)};
      const message = "authorization:github:" + type + ":" + JSON.stringify(payload);

      function sendAuthorization() {
        if (window.opener) {
          window.opener.postMessage(message, "*");
        }
        window.setTimeout(function () {
          window.close();
        }, 500);
      }

      if (window.opener) {
        window.opener.postMessage("authorizing:github", "*");
        window.addEventListener("message", sendAuthorization, false);
        window.setTimeout(sendAuthorization, 1000);
      } else {
        document.body.innerText = "Authentication complete. You can close this window.";
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
