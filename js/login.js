const formularioHTML = document.getElementById("loginBox");
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let userLogged = localStorage.getItem("usuarioLogado");
const usuario = JSON.parse(userLogged);
const btnSair = document.getElementById("sair");

function irCadastro() {
  window.location.href = "criarusu.html";
}

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = document.getElementById("username").value;

  const password = document.getElementById("senha").value;

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.email === email && usuario.senha === password
  );

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    window.location.href = "recados.html";
  } else {
    alert("Verifique e-mail e senha!");
  }
});

btnSair.addEventListener("click", () => {
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  const ident = usuario.email;
  const troca = listaUsuarios.findIndex((element) => element.email == ident);

  listaUsuarios.splice(troca, 1, usuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  localStorage.removeItem("usuarioLogado");

  window.location.href = "login.html";
});
