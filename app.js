// Array para armazenar os nomes
let amigos = [];

// Função para adicionar nomes
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.innerHTML = `<span>${nome}</span>`;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `
        <div class="resultado-container">
            <p>O amigo sorteado é: <strong>${nomeSorteado}</strong></p>
            <img src="assets/gato.gif" alt="Gato feliz" class="gato-gif">
        </div>
    `;
}