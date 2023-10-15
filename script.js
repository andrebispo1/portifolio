
//------------Palavras animadas ---------------------
const palavrasDigitada = [' Front End','Back End', ' Full Stack'];
const cores = ['red','green','blue']
const spanPalavra = document.getElementById('palavras'); 

let msgIndex = 0;
let letraIndex = 0;
let msgAtual = '';
let letraAtual = '';
let corAtual = '';

const digitar  = () => {

  if(msgIndex === 3){
    msgIndex = 0;
  }
  corAtual = cores[msgIndex];
  msgAtual  = palavrasDigitada[msgIndex];
  letraAtual = msgAtual.slice(0,letraIndex++); 
  spanPalavra.innerHTML= letraAtual ;
  spanPalavra.style.color= corAtual;
if(letraAtual.length === msgAtual.length){
  msgIndex++
  letraIndex = 0;
}

}
setInterval(digitar,200)
  