function showLogin(url) {
  window.location.href = url;
}
//////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  // Verificar se o usuário está logado
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href =
      "C:/Users/jhonathan.silva/Documents/projeto/login/login.html";
  } else {
    // Definir o nome do usuário no perfil
    const username = localStorage.getItem("username");
    if (username) {
      document.getElementById("username").textContent = username;
    }
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username"); // Limpa também o nome do usuário
  window.location.href =
    "C:/Users/jhonathan.silva/Documents/projeto/login/login.html";
}
