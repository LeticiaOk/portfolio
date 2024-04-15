/*
   - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve  abrir os projetos que estão escondidos no html 
 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

  Passo 2 - identificar o clique no botão 

  Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

  Objetivo 2 - esconder o botão de mostrar mais 

  Passo 1 - pegar o botão e esconder ele  
*/


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto-item:not(.ativo)'); // Pega apenas a classe que não tem 'ativo' dentro do class=""

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () =>{
  mostrarMaisProjetos();
  esconderBotao();

});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");  // Adiociona classe 'remover' que está como display 'none' no CSS.
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo'); // Para cada volta no laço adiciona a classe 'ativo' que está como display 'block' no css.
    });
}
