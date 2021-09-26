// Crie um array de números pares, e utilizando a função .map() nesse array,
// crie um novo array com apenas números ímpares.

console.log('MAP');
let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16];

let numerosImpares = numerosPares.map(function (numeros) {
    return numeros - 1;
})
console.log(numerosImpares);

//Crie um array de nomes, que possua dois índices com o nome Maria.
//Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
console.log();
console.log('FILTER');
let nomes = ['Marcelo', 'João', 'Maria', 'Jorge', 'Maria', 'Mariana'];

let nomesDuplicados = nomes.filter(function (nome) {
    return nome == "Maria";
})
console.log(nomesDuplicados);

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados
console.log();
console.log('REDUCE');
let arrayNumeros = [1, 5, 9, 3, 7];

let numerosFormatados = arrayNumeros.reduce(function (acumulador, numero) {
    return acumulador + ' - ' + numero;
})
console.log(numerosFormatados);

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach()
//e imprima a frase “O animal é NOME_DO_ANIMAL”.
console.log();
console.log('FOREACH');
let listaAnimais = ['Macaco','Jacaré','Leão','Girafa','Tigre'];

listaAnimais.forEach(function (animais) {
    console.log(`O animal é ${animais}`);
})