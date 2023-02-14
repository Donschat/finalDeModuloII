let userLogged = localStorage.getItem("usuarioLogado");
let cont = 0;
const usuario = JSON.parse(userLogged);
const btnSair = document.getElementById("sair");
const criar = document.getElementById("criaRecado");

function setRecado() {
  const divMax = document.getElementById("table1");
  let td = document.createElement("td");
  let p = document.createElement("p");

  divMax.appendChild(td);
  td.setAttribute("id", `a${cont}`);
  td.appendChild(p);
  p.innerText = `${recadoEscrito}`;
  cont++;
}
function captura() {
  document.querySelectorAll("td").forEach(function (button) {
    button.addEventListener("click", function (event) {
      const el = event.target;
      let recado = el.innerText;
      const id = el.id;
      const recados = usuario.recados;
      let confirmar = confirm("Você deseja excluir este recado?");
      if (confirmar) {
        let exclude = confirm("Você tem certeza?");
        if (exclude) {
          const iPraExcluir = recados.findIndex(
            (elemento) => elemento == recado
          );
          recados.splice(iPraExcluir, 1);
          document.getElementById(id).remove();
        }
      } else {
        let confirmarEdit = confirm("Você deseja editar este recado?");
        if (confirmarEdit) {
          let recadoNovo = (document.getElementById(id).innerHTML =
            prompt(recado));
          const iPraExcluir = recados.findIndex(
            (elemento) => elemento == recado
          );
          recados.splice(iPraExcluir, 1, recadoNovo);
        }
      }
      const usuarioAtual = JSON.stringify(usuario);
      localStorage.setItem("usuarioLogado", usuarioAtual);
    });
  });
}
function recaditos() {
  for (let i = 0; i < usuario.recados.length; i++) {
    recadoEscrito = usuario.recados[i];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!userLogged) {
    window.location.href = "./login.html";
  }

  userLogged = JSON.parse(userLogged);
});

criar.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let recado = document.getElementById("recado").value;
  if (!recado) {
    return alert("escreva algo");
  }
  usuario.recados.push(recado);
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  recaditos();
  setRecado();
  captura()
  location.reload();

});

for (let i = 0; i < usuario.recados.length; i++) {
  recadoEscrito = usuario.recados[i];
  setRecado();
}

btnSair.addEventListener("click", () => {
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  const ident = usuario.email;
  const troca = listaUsuarios.findIndex((element) => element.email == ident);

  listaUsuarios.splice(troca, 1, usuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  localStorage.removeItem("usuarioLogado");
  window.location.href = "./login.html";
});

captura();
