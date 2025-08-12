// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor digitado no input
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista de amigos na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista de amigos
function atualizarLista() {

    let lista = document.getElementById("listaAmigos");

    // Limpa a lista atual
    lista.innerHTML = "";
    // Percorre o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Adicionar elemento <li> para cada amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }

}
// Função para sortear os amigos
function sortearAmigo() {
    if (amigos ==0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo secreto sorteado: <strong>${amigoSorteado}</strong></li>`;
}

// 🔹 Torna as funções acessíveis para o HTML
window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;

// Função para reiniciar a lista e resultados
function reiniciarLista() {
    amigos = []; // esvazia o array
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    alert("Lista reiniciada com sucesso!");
}
