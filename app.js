//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Aqui estão os botões que serão usados no processo.
document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);
document.getElementById("sortearAmigo").addEventListener("click", sortearAmigo);

//Aqui é a primeira função, basicamente ela é para adicionar um nome a lista. Aqui também é retirado nomes duplicados
function adicionarAmigo() {
    let nomeAdicionado = document.querySelector("input").value.trim();

    if (nomeAdicionado === "") {
        alert("Por favor, insira um nome válido.");
        return;     
    }
    
    if (amigos.includes(nomeAdicionado)) {
        alert("Esse amigo já foi adicionado.");
        return;
    }
    amigos.push(nomeAdicionado);
    console.log(amigos);
    
    atualizarLista();

    document.querySelector("input").value = "";
}

//Essa é a segunda função, ela é para atualizar a lista conforme os nomes são adicionados.
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}

//Terceira função, usada para sortear um dos nomes que foi inserido na lista e ela também serve para limpar a lista após o sorteio.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de realizar o sorteio");
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    amigos = [];
    atualizarLista()
}

