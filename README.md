# 🦸‍♂️ Histórias de Heróis

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> Uma base de conhecimento interativa sobre super-heróis da Marvel e DC, apresentando um design moderno e responsivo.

## 📷 Previsão
<img width="1439" height="899" alt="image" src="https://github.com/user-attachments/assets/9421a9e4-6a49-4f63-b06a-cb9e5dce7163" />


## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido com o intuito de aplicar conceitos fundamentais de desenvolvimento web Front-end, focando em:
* **Manipulação do DOM** via JavaScript.
* Consumo de dados assíncronos (leitura de arquivo JSON local).
* Lógica de programação para **filtragem de busca em tempo real**.
* Design de Interface (UI) com foco em estéticas modernas (**Neon** e **Glassmorphism**).

## 🛠️ Funcionalidades

### 1. 🔍 Sistema de Busca
O site possui um campo de pesquisa funcional que permite filtrar os heróis pelos seguintes critérios:
* **Nome** do herói (ex: "Batman").
* Termos presentes na **descrição** (ex: "Bilionário", "Aranha").
* **Ano** da primeira aparição.
* *A busca é acionada ao clicar no botão ou pressionar "Enter".*

### 2. ⚡ Carregamento Dinâmico
Os dados não estão "chumbados" no HTML. O projeto utiliza a **Fetch API** e `async/await` para ler o arquivo `data.json` e gerar os cards de informações automaticamente. Isso facilita a manutenção e adição de novos heróis sem alterar o código estrutural.

### 3. 🎨 UI/UX Design (Imersivo)
O projeto conta com um CSS avançado (`style.css`), destacando-se por:
* **Tema Cyber/Neon:** Uso de variáveis CSS (`--primary-color`, `--tertiary-color`) para fácil manutenção de paleta.
* **Glassmorphism:** Efeito de vidro fosco no cabeçalho e nos cards (`backdrop-filter: blur`).
* **Interatividade:** Efeitos de *hover* (brilho e escala) nos cards e botões.
* **Tipografia:** Uso da fonte *Quicksand* para uma leitura moderna e limpa.

### 4. 📱 Responsividade
Layout totalmente adaptável para diferentes tamanhos de tela (Desktop, Tablet e Mobile), com ajustes específicos de fonte e layout via *Media Queries*.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Semântica e estrutura.
* **CSS3:** Flexbox, variáveis, gradientes, animações e design responsivo.
* **JavaScript (ES6+):** Arrow functions, manipulação de eventos e Fetch API.
* **JSON:** Estruturação dos dados.

## 📂 Estrutura de Arquivos

```bash
/
├── index.html   # Estrutura principal da página
├── style.css    # Estilização completa (Neon/Dark Theme)
├── script.js    # Lógica de busca e geração de cards
└── data.json    # Banco de dados dos heróis
