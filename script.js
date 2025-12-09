const cardConteiner = document.querySelector(".card-conteiner");
const campoBusca = document.querySelector("header input"); // Adicionado para pegar o input de busca

let dados = [];

// Carrega os dados do JSON e exibe todos os cards inicialmente
async function carregarDados(){
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    exibirResultados(dados);
}

function filtrarDados() {
    const termoBusca = campoBusca.value.toLowerCase();
    
    const resultadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca) ||
        dado.primeira.toString().includes(termoBusca)
    );
    
    exibirResultados(resultadosFiltrados);
}

//campoBusca.addEventListener("input", filtrarDados);

campoBusca.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        filtrarDados();
    }
});

function exibirResultados(dados){
    // Limpa os cards existentes antes de exibir os novos resultados
    cardConteiner.innerHTML = "";

    for(let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p><strong>Primeira aparição:</strong> ${dado.primeira}</p>
        <p class="descricao">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardConteiner.appendChild(article);
    }
}

// Inicia o carregamento dos dados quando o script é executado
carregarDados();