//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
    
    document.querySelector('adicionarAmigo').addEventListener('click', adicionarAmigo);

    function adicionarAmigo() {
        let nomeAdicionado = document.querySelector("input").value.trim();

        if (nomeAdicionado === "") {
         alert("Por favor, insira um nome válido.");
            return;
     
    
    amigos.push(nomeAdicionado);
        console.log (amigos);
     }

    let li = document.createElement("li");
    li.textContent = nomeAdicionado;

    document.getElementById("listaAmigos").appendChild(li);

    document.querySelector("input").value = "";
    }

