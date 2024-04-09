const adicionarUsuario = (event) => {
  event.preventDefault();

  const usuario = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
  };

  const li = document.createElement("li");
  li.innerHTML = `${usuario.nome} - ${usuario.email} - 
  <button class="button1" onclick="editarCadastro(event)">Editar</button>
  <button class="button2" onclick="excluirCadastro(event)">Excluir</button>`;
  lista.appendChild(li);

  document.getElementById("formUsuario").reset()
};

const excluirCadastro = (event) => {
  event.target.parentNode.remove()
};

const editarCadastro = (event) => {
  var textoSeparado = event.target.parentNode.textContent.split(" - ");
  document.getElementById("nome").value = textoSeparado[0];
  document.getElementById("email").value = textoSeparado[1];
  event.target.parentNode.remove();
};

const cadastro = document.getElementById("cadastro");
const lista = document.getElementById("lista");
const button = document.getElementById("cadastrar");
