/*Escreva um aplicativo em Javascript que recebe um número inteiro e
mostra os números pares e ímpares (separados), de 1 até esse inteiro*/

let numero = 33; // Numero inteiro

let i1 = 1;
let i2 = 1;

console.log("Númeos Pares de 1 a " + numero)
while (i1 < numero) {   
    if (i1 % 2 == 0) {
        console.log(i1);
    }
    i1++
}    
console.log();

console.log("Númeos Ínpares de 1 a "+ numero);

while (i2 < numero) {   
    if (i2 % 2 != 0) {
        console.log(i2);
        }
    i2++;
}