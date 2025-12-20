const cardConteiner = document.querySelector(".card-conteiner");
const campoBusca = document.querySelector("header input");

let dados = [];

// Carrega os dados do JSON
async function carregarDados() {
    try {
        let resposta = await fetch("../data.json");
        dados = await resposta.json();
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

function filtrarDados() {
    const termoBusca = campoBusca.value.trim().toLowerCase();
    
    // Verifica se o usuário está na index.html ou na raiz
    const isIndex = window.location.pathname.endsWith("home.html") || window.location.pathname === "/paginas/";

    if (!isIndex) {
        // Redireciona para a index enviando o termo formatado para URL
        window.location.href = `/paginas/git adhome.html?busca=${encodeURIComponent(termoBusca)}`;
        return;
    }

    // Se estiver na index, filtra normalmente
    const resultadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca) ||
        dado.sinopse.toString().includes(termoBusca)
    );
    
    exibirResultados(resultadosFiltrados);
}

function exibirResultados(dadosFiltrados) {
    if (!cardConteiner) return; // Proteção caso o container não exista na página atual
    
    cardConteiner.innerHTML = "";

    for (let dado of dadosFiltrados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p><strong>Sinopse:</strong> ${dado.sinopse}</p>
        <p class="descricao">${dado.descricao}</p>
        <a href="${dado.link}">Saiba mais</a>
        `;
        cardConteiner.appendChild(article);
    }
}

// Configuração de eventos
campoBusca.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        filtrarDados();
    }
});

// Função de Inicialização
async function inicializar() {
    await carregarDados();

    // Verifica se há um parâmetro 'busca' na URL
    const urlParams = new URLSearchParams(window.location.search);
    const termoDaURL = urlParams.get('busca');

    if (termoDaURL) {
        // Decodifica o termo (ex: "Homem%20de%20Ferro" vira "Homem de Ferro")
        const termoLimpo = decodeURIComponent(termoDaURL);
        campoBusca.value = termoLimpo;
        
        // Se estiver na index, já mostra o resultado filtrado
        if (cardConteiner) {
            filtrarDados();
        }
    } else if (cardConteiner) {
        // Se não houver busca, mostra todos os dados (apenas na index)
        exibirResultados(dados);
    }
}

inicializar();