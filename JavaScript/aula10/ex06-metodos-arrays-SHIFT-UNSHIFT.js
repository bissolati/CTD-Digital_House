console.log("SHIFT - Elimina o primeiro elemento de um array");
console.log("Cores Roxo, Laranja, Azul");
let cores = ["Roxo","Laranja","Azul"];

let primeiraCor = cores.shift()

console.log(cores); // ["Laranja", "Azul"]
console.log(primeiraCor); //Roxo

console.log();
console.log("------------------------------------");

console.log("UNSHIFT");
console.log("Cores Roxo, Laranja, Azul");

let cores2 = ["Roxo","Laranja","Azul"];
cores2.unshift("Violeta") // Retorna 4
console.log(cores2);
// [ 'Violeta', 'Roxo', 'Laranja', 'Azul' ]

cores2.unshift('Cinza',' Ouro') // Retorna 6

console.log(cores2);
// ['Cinza', 'Ouro', Violeta', 'Roxo', 'Laranja', 'Azul']
