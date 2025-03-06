//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
    
document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);

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

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de realizar o sorteio");
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = "Amigo sorteado: <strong>${amigoSorteado}</strong>";
}
document.getElementById("sortearAmigo").addEventListener("click", sortearAmigo);