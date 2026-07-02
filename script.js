const appId = "33IsXHOsY1092ufzgmaN8";
const redirectUri = "https://gem254.github.io/gem-trades/";

document.getElementById("loginBtn").addEventListener("click", () => {
    const authUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;
});
