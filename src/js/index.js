/*
    objetico - quando clicarmos na aba temos que mostrar o conteúdo
    da aba que foi clicada pelo usuário e esconder o conteúdo da 
    aba anterior

    - passo 1 - dar um jeito de pegar os elementos que reresentam 
    as abas no HTML

    - passo 2 - dar um jeito de identificar o clique no  elemento da aba 
     
    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada

    - passo 4 - marcar a aba clicada como selecionada

    - passo 5 - esconder o conteúdo anterior

    - passo 6 - mostrar o conteúdo da aba selecionada
*/

const abas = document.querySelectorAll(".aba"); //p1

abas.forEach(aba => { //p2
    aba.addEventListener("click", function() { 
        
        if(aba.classList.contains("selecionada")){
            return;
        }
       
        selecionarAba(aba)
       
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    //p3
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");
     //p4
    aba.classList.add("selecionada");

}

function mostrarInformacoesDaAba(aba) {
     //p5
     const informacaoSelecionada = document.querySelector(".informacao.selecionada");
     informacaoSelecionada.classList.remove("selecionada");
     
     //p6
     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

     const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionada")

}