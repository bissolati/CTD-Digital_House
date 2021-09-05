console.log('lastIndexOf - Similar ao .indexOf(), exceto que ele começa procurando pelo elemento no final do array (de trás para frente)');
console.log('Se houver elementos repetidos, ele retorna a posição do primeiro que encontrar (ou seja, o último, se olharmos desde o início).');
console.log();

let cores = ['Roxo', 'Laranja', 'Azul', 'Laranja'];

console.log(cores.lastIndexOf('Laranja'));
// Ele encontrou o que procurava.
// Retorna 3, que é o índice do elemento encontrado.

console.log();

console.log(cores.lastIndexOf('Abacaxi'));
// Não encontrou o que procurava. Retorno -1.

