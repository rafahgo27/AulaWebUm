//variáveis no Js
// sinal de igual (=) é operador de atribuição
var nome="Ana"; //string
var idade=24; //number, int
var peso=72.5; //double
const anos="25"; //string
var numero="245"; //string
// ----------------------------------
//Funções: conjunto de rotinas e instruções que podem ser invocadas pelo programa

function olapovo() {
    console.log("Olá Povo")
    console.log("Amanhã é feriado")
}
olapovo() //invocar a função

//função com parâmetros
function boaNoite(nome) {
    console.log("Boa Noite", nome)
}
boaNoite("Pafúncia")

//Função com cálculo de Soma
function soma(x, y) {
    return(x + y);
}
console.log(soma(2, 3))

//Função com cálculos de Subtração
function subtracao(x, y) {
    return(x - y);
}
console.log(subtracao(2, 3))

//Função com cálculos de Multiplicação
function multiplicacao(x, y) {
    return(x * y);
}
console.log(multiplicacao(2, 3))

//Função com cálculos de Divisão
function divisao(x,y) {
    return(x / y);
}
console.log(divisao(2, 3))
