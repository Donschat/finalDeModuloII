let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
const formularioCadastro = document.getElementById("cadastroUser");
const btnSair = document.getElementById("sair");

function irLogin() {
  window.location.href = "login.html";
}
formularioCadastro.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const senhaRepeat = document.getElementById("repeatSenha").value;
  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.email === email
  );

  if (senha === senhaRepeat && !usuarioEncontrado) {
    const novoUsuario = {
      email: email,
      senha: senha,
      recados: [],
    };
    listaUsuarios.push(novoUsuario);
    console.log(listaUsuarios);

    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    alert("Cadastro realizado");
    window.location.href = "login.html";
  } else {
    alert("Senha não confere ou usuário já existe.");
  }
});

btnSair.addEventListener("click", () => {
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  const ident = usuario.email;
  const troca = listaUsuarios.findIndex((element) => element.email == ident);

  listaUsuarios.splice(troca, 1, usuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  localStorage.removeItem("usuarioLogado");

  window.location.href = "./login.html";
});


