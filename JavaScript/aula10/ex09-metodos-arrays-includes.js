/*Também similar ao .indexOf(), mas retorna um booleano
• Recebe um item para pesquisar no array
• Retorna verdadeiro se encontrou o que estava procurando, falso se não*/

let cores = ['Roxo', 'Laranja', 'Azul'];

console.log(cores.includes("Laranja"));
// Ele encontrou o que procurava. Retorna true
console.log();
console.log(cores.includes('Abacaxi'));
// Não encontrou o que procurava. Retorna false