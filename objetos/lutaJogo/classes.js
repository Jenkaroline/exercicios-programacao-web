//sao 3 personagens: eu, o inimigo e o inimigoChefe (mais poderoso) ==> usar objetos
//o ataque manipula o quao cheia uma barra está e a quantidade de vida
// imprime uma mensagem na tela 1. dano do golpe 2. quando o persona ja morreu ou 3. quando vc ja morreu

let minhaVida = document.querySelector(".minhaVida");
let vidaInimigo = document.querySelector(".vidaInimigo");
let resultado = document.querySelector(".resultado");
let botoes = document.getElementsByTagName("button");


class Personagem {
    constructor(nome, vida, dano){
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
    }
}

let jenni = new Personagem("Jenni", 100, 10);
let monstro = new Personagem("Monstro", 150, 15);
let chefe = new Personagem("Chefe", 200, 20);

document.querySelector(".meuAtaque").addEventListener("click", () => { 
    monstro.vida -= jenni.dano;

    if(monstro.vida > 0){
        resultado.innerHTML += `<p> O monstro sofreu um ataque e está com ${monstro.vida} de vida. </p> `;

        porcentualVida = (monstro.vida / 150) * 100;
    } else{
        resultado.innerHTML += `<p> Você venceu! </p> `;
        vidaInimigo.style.display = 'none';

        for(let botao of botoes){
            botao.style.display = 'none';
        }
    } 

    vidaInimigo.style.width = porcentualVida + '%';
    
});

document.querySelector(".ataqueInimigo").addEventListener("click", () => {    
    jenni.vida -= monstro.dano;

    if(jenni.vida > 0){
        resultado.innerHTML += `<p> Você sofreu um ataque e está com ${jenni.vida} de vida. </p> `;
        
    } else{
        resultado.innerHTML += `<p> Você perdeu! </p> `;
        

        minhaVida.style.display = 'none';

        for(let botao of botoes){
            botao.style.display = 'none';
        }
    } 
    minhaVida.style.width = jenni.vida + '%';

});


