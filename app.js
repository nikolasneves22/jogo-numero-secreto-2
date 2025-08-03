let listaDeNumerosSorteados = [];
let numeroLimite = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
 if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirmensagemInicial(){
     exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
     exibirTextoNaTela('p', 'Escolha um Número de 1 a 30');
}

exibirmensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemtentativas);
     } else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'O Número Secreto é Menor');
            } else{
                exibirTextoNaTela('p', 'O Número Secreto é Maior');
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
            tentativas++;
            limparCampo();
        }
       
    }

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 30 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById('reinicia').setAttribute('disabled',true);

}
//tentativa