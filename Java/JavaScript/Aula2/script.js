//TIPOS PRIMITIVOS 

// BOOLEAN 
var test = false;
console.log(test);
console.log(typeof(test));

//NUMBER
//variavel
var numeroQualquer = 1;
//imprimindo o numero
console.log(numeroQualquer);
//colocando seu tipo
console.log(typeof(numeroQualquer));

//STRING
var nome = 'joao';
console.log(nome);
console.log(typeof(nome));


//FORMAS DE DLECLARAR VARIAVEIS
//var; e utilizada para valores globlais e pode ser alterada
var variavel = 2;
variavel = 4;

//let; utilizada para valores locais, e pode ser alterada localmente
let local = 'joao';
local = 'paulo';

//const; somente leitura e obrigatoriamente deve ter um valor, e nao pode ser alterada
const constante = 'nada';
//const constante = 'algo';

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    //por boa pratica utilizamos o let em escopo locais
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

//fora ele nao funciona
//console.log(escopoLocalInterno);

escopoGlobal();

// OPERADORES MATEMATICOS
var adicao =  1 + 1;
var subtracao =  1 - 1;
var multiplicacao =  5 * 5;
var divisao = 6 / 3;
