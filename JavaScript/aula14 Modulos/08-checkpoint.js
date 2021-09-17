//Dado o array: let numeros= [10, 8, 7, 99, 0, 1, 6].
//Qual comando devemos executar para que a saída seja: [ 99, 10, 8, 7, 6, 1, 0] ? *

let numeros= [10, 8, 7, 99, 0, 1, 6];

numeros.sort(function(a,b){ return b-a;});


console.log(numeros);