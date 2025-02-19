//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
    
    document.querySelector('adicionarAmigo').addEventListener('click', adicionarAmigo);

    function adicionarAmigo() {
        let nomeAdicionado = document.querySelector("input").value.trim();

        if (nomeAdicionado === "") {
         alert("Por favor, insira um nome válido.");
            return;
     }
    
    amigos.push(nomeAdicionado);
        console.log (amigos);
     }

    let li = document.createElement("li");
    li.textContent = nomeAdicionado;

    document.querySelector("listaAmigos").appendChild(li);

    document.querySelector("input").value = "";


// let amigos = [];

// document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);

// function adicionarAmigo() {
//     let nomeAdicionado = document.querySelector("input").value.trim(); // Captura e remove espaços

//     // Validação do nome
//     if (nomeAdicionado === "") {
//         alert("Por favor, insira um nome válido.");
//         return; // Sai da função se o nome estiver vazio
//     }

//     // Adiciona o nome ao array
//     amigos.push(nomeAdicionado);

//     // Cria um novo elemento de lista
//     let li = document.createElement('li');
//     li.textContent = nomeAdicionado; // Define o texto do elemento de lista

//     // Adiciona o novo elemento à lista de amigos na interface
//     document.getElementById('listaAmigos').appendChild(li);

//     // Limpa o campo de entrada
//     document.querySelector("input").value = "";

//     // (Opcional) Exibe a lista de amigos no console
//     console.log(amigos);
// }