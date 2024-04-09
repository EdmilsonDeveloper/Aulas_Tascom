// Selecionando elementos do DOM
const container = document.getElementById('container');
const button = document.getElementById('btn');
// Adicionando um evento de clique ao botão
button.addEventListener('click', function() {
 // Criando um novo elemento
 const newParagraph = document.createElement('p');
 newParagraph.textContent = 'Novo parágrafo criado dinamicamente!';
 // Adicionando o novo elemento ao DOM
 container.appendChild(newParagraph);
});
