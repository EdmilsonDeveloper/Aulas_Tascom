const lista = document.getElementById('lista');
const listaMaiorDeIdade = document.getElementById('listaMaiorDeIdade');

const user = [{
    
    nome : "edmilson",
    idade : 22,
    sexo: "Honda civic"
},
{
    nome : "joão",
    idade : 30,
    sexo: "chevrolet",
},
{
    nome : "alex",
    idade : 18,
    sexo: "bmw"
}
]

user.map((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.nome} - ${user.sexo} - ${user.idade} anos`;
    lista.appendChild(li);
})

user.filter((user) => {
    if(user.idade >= 18) {
        const li = document.createElement("li");
    li.textContent = `${user.nome} - ${user.idade} anos`;
    listaMaiorDeIdade.appendChild(li);
    }
})

