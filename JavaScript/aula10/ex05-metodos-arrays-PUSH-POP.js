console.log("PUSH - Adiciona um ou mais elementos ao final do array");
console.log("Exemplo Roxo, Laranja, Azul")
let cores = ["Roxo","Laranja","Azul"];

cores.push("Violeta") // Retorna 4

console.log(cores);

cores.push("Cinza","Ouro"); // Retorna 6

console.log(cores);

console.log();
console.log("------------------------------------");

console.log("POP - Elimina o último elemento de um array");
console.log("Exemplo Roxo, Laranja, Azul")
let cores2 = ["Roxo","Laranja","Azul"];

let ultimaCor = cores2.pop()

console.log(cores2) // ["Roxo","Laranja"]
console.log(ultimaCor) //Azul