let numeroDigitado = document.getElementById('numeroDigitado');
let botaoEnviar = document.getElementById('botaoEnviar');
let botaoIniciar = document.getElementById('botaoIniciar');
let botaoReiniciar = document.getElementById('botaoReiniciar');
let mensagem = document.getElementById('mensagem');

let numeroSorteado = Math.floor(Math.random() * (100) + 1);
let tentativas = 10;

//math.random = gera um número aleatório entre 0 e 1, incluindo o 0 e excluindo o 1.
botaoIniciar.addEventListener('click', sortear);

function sortear(){
  botaoIniciar.style = 'display:none';
}
  
botaoEnviar.addEventListener('click', comparar);

function comparar(){
  if(numeroSorteado == numeroDigitado.value){
    mensagem.textContent = "Você acertou!";
      
    botaoReiniciar.style = 'display:block';
    botaoEnviar.style = 'display:none';
    botaoReiniciar.addEventListener('click', reiniciar);
  } else if (numeroDigitado.value > numeroSorteado){
    tentativas--;
    mensagem.textContent = "O número é menor! Você tem " + tentativas + " tentativa(s)!";
  }
  else {
    tentativas--;
    mensagem.textContent = "O número é maior! Você tem " + tentativas + " tentativa(s)!";
  }
    
  if(tentativas < 1){
    mensagem.textContent = "Você perdeu!"

    botaoReiniciar.style = 'display:block';
    botaoEnviar.style = 'display: none';
    botaoReiniciar.addEventListener('click', reiniciar);
  } else if(numeroDigitado.value > 100 || numeroDigitado.value < 0){
    mensagem.textContent = "Digite um número entre 0 e 100.";
  }
}

function reiniciar(){
  window.location.reload();
}