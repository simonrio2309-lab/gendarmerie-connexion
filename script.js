const API_URL = "https://script.google.com/macros/s/AKfycbwXiKE_X2LwybhD7A9DO1oYG2P_HY7V0-SRaWIqeKVPIitEWafbzmq25HB8HGbGEJ9sHg/exec";
const REDIRECT_URL = "https://sites.google.com/view/genesis-ggd972/accueil";

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const message = document.getElementById("loginMessage");
  const identifiant = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  message.style.display = "block";
  message.textContent = "Vérification en cours...";

  try {
    const res = await fetch(`${API_URL}?identifiant=${encodeURIComponent(identifiant)}&password=${encodeURIComponent(password)}`);
    const data = await res.json();

    if (!data.success) {
      message.textContent = data.message;
      return;
    }

    message.style.color = "#0b2a4a";
    message.textContent = "Connexion autorisée. Redirection...";

    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 800);

  } catch (err) {
    message.textContent = "Erreur de connexion au serveur.";
    console.error(err);
  }
});
