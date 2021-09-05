let array1 = [1,2,3];
let array2 = [10,3,10,4];
let array3 = [-5, 100];

function SomarArray(Array) {
    let soma = 0;

    for (let i = 0; i < Array.length ; i++) {
        soma = soma + Array[i];
    }
    return soma
}

let soma1 = SomarArray(array1);
console.log("A soma do Array 01 é: ");
console.log(soma1);

console.log();

let soma2 = SomarArray(array2);
console.log("A soma do Array 02 é: ");
console.log(soma2);

console.log();

let soma3 = SomarArray(array3);
console.log("A soma do Array 03 é: ");
console.log(soma3);