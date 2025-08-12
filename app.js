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