const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const appId = "33IsXHOsY1092ufzgmaN8";
    const redirectUri = "https://gem-trades.onrender.com";

    const authUrl =
        `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;});
