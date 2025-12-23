document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Empêcher le rechargement de la page

    // Récupération des valeurs des champs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérification des identifiants
    if (username === "GendarmerieMartinique" && password === "GN972") {
        // Redirection vers ton Google Sites si les identifiants sont corrects
        window.location.href = "https://sites.google.com/view/genesis-ggd972/accueil";  // Remplace cette URL par ton propre Google Sites
    } else {
        alert("Identifiant ou mot de passe incorrect.");
    }
});
