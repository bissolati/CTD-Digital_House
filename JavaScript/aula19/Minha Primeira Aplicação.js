let construtoraModulo = require("./funcaoConstrutora");

let pessoa1 = new construtoraModulo(1.90, "M");
let pessoa2 = new construtoraModulo(1.80, "F");
let pessoa3 = new construtoraModulo(1.20, "F");
let pessoa4 = new construtoraModulo(1.70, "M");
let pessoa5 = new construtoraModulo(1.60, "F");
let pessoa6 = new construtoraModulo(1.65, "M");
let pessoa7 = new construtoraModulo(1.95, "M");
let pessoa8 = new construtoraModulo(2.00, "F");
let pessoa9 = new construtoraModulo(1.80, "M");
let pessoa10 = new construtoraModulo(1.82, "F");
let pessoa11 = new construtoraModulo(1.63, "F");
let pessoa12 = new construtoraModulo(1.69, "M");
let pessoa13 = new construtoraModulo(1.70, "M");
let pessoa14 = new construtoraModulo(1.55, "M");
let pessoa15 = new construtoraModulo(1.50, "F");

lista = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9,pessoa10,pessoa11,pessoa12,pessoa13,pessoa14,pessoa15];


let menorModulo = require("./funcaoMenorAltura")
console.log(`A menor altura é: ${menorModulo(lista)}`);


let maiorModulo = require("./funcaoMaiorAltura")
console.log(`A maior altura é: ${maiorModulo(lista)}`);


let mediaModulo = require("./funcaoMedia")
console.log(`A média das alturas das mulheres é: ${mediaModulo(lista)}`);


let homensModulo = require("./funcaoQuantidadeHomens")
console.log(`A quandidade de homens na lista é: ${homensModulo(lista)}`);

/*
function Notas(a,b) {
    this.idade = a;
    this.nota = b;
}

let nota1 = new Notas(20,1);
let nota2 = new Notas(25,3);
let nota3 = new Notas(22,2);
let nota4 = new Notas(34,2);
let nota5 = new Notas(28,1);
let nota6 = new Notas(44,3);
let nota7 = new Notas(24,3);
let nota8 = new Notas(24,1);
let nota9 = new Notas(54,1);
let nota10 = new Notas(45,2);
let nota11 = new Notas(30,1);
let nota12 = new Notas(33,3);
let nota13 = new Notas(42,1);
let nota14 = new Notas(50,2);
let nota15 = new Notas(47,2);

listaNotas = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15];

function mediaIdade(array){
    let idade = [];
    let soma = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].nota == 3) {
            idade.push(array[i].idade);
        }
    }
    for (let j=0; j < idade.length; j++){
        soma = soma + idade[j];
    }
    return soma/idade.length;
}
console.log(mediaIdade(listaNotas));

function regular(array){
    let soma = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].nota == 1){
            soma = soma + 1;
        }
    }
    return soma;
}
console.log(regular(listaNotas));


function bom(array){
    let soma = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].nota == 2){
            soma = soma + 1;
        }
    }
    return (soma/array.length)*100+"%";
}
console.log(bom(listaNotas));
*/