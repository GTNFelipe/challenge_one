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

//     document.getElementById("listaAmigos").appendChild(li);

//     document.querySelector("input").value = "";
//     const listaAmigos = document.getElementById("lista-Amigos");
//     listaAmigos.InnerHTML = "";
// }

