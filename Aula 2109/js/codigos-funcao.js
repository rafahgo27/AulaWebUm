var ano=2022;
document.write(`Este ano é: ${ano}.`);
document.write(`Ana nasceu em 1990. Quantos anos ela tem? ${ano - 1990}`);

//--------------------------------------------
var nome="Mafalda";
var sobrenome="Matos";

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
nomeCompleto(); //invoca a função
console.log(`O Nome Completo é: ${nome} ${sobrenome}`);
//---------------------------------------------
//Operadores Aritmétricos
//Soma --> +
//Subtração --> -
//Multiplicação --> *
//Divisão --> /
//resto de Divisão --> %
//Função com cálculo de Soma--------------------
function soma(a, b) {
    return(a + b);
}
console.log(soma(2, 3))
//-----------------------------------------------
//ARROW FUNCTION E FUNÇÕES PURAS
//padrão ECMA6
const somar=(a, b) => a + b;
console.log(3, 6);