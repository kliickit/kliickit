const express = require("express");
const app = express();
const port = 3000;

// Route pour générer un lien de redirection vers l'application
app.get("/generate", (req, res) => {
  const url = req.query.url;

  if (url.includes("youtube.com")) {
    const videoId = new URL(url).searchParams.get("v");
    const deepLink = `youtube://www.youtube.com/watch?v=${videoId}`;
    res.redirect(deepLink); // Redirige vers l'application YouTube
  } else {
    res.redirect(url); // Si ce n'est pas un lien YouTube, redirige normalement
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur http://localhost:${port}`);
});
