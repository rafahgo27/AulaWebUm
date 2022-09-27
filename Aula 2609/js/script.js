const listaFrutas= ["Banana", "Uva", "Maçã", "Tomate"];
console.log(listaFrutas);
document.write(listaFrutas);

//Array e métodos:
//Verificar Posição
var numeros= [2,4,6,8,10,12,14,16,18,20];
console.log(numeros);
var posicao= numeros.indexOf(6);
console.log(`A Posição do Elemento 6 é: ${posicao}`);

//Adicionar Elementos
const frutas= ["Banana", "Uva", "Maçã", "Tomate"];
console.log(frutas);
frutas.push("Bergamota");//add elemento no final
console.log(frutas);
frutas.unshift("Laranja");//add elemento no início
console.log(frutas);

//Remover Elementos
const frutaria= ["Banana", "Uva", "Maçã", "Tomate"];
console.log(frutaria);
frutaria.pop();//remove o último elemento
console.log(frutaria);
frutaria.sort();//ordem alfabética
console.log(frutaria);

//Array com método forEach
listaNum= [1,2,3,4,5,6];
function verificarPares(elemento, indice){
    if (elemento %2==0)
    console.log(`Os Números Pares são: ${elemento} e possuem o Índice: ${indice}`);
}
listaNum.forEach(verificarPares);

//-----------------------------------------
numeros= [1,2,3,4,5,6,11,13,15,16];
numeros.forEach(function(elemento){
    if(elemento%2==0)
    console.log(elemento);
});