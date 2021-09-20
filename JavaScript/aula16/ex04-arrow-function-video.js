//exemplos de Arrow Function

let soma = (num1, num2) => num1 + num2;

//se tiver só um argumento não precisa do parenteses

let dobro = num => num * 2;

dobro(6);

//Se tiver várias sentenças vai precisar de chaves e return

let Par = numero => {
    if (numero % 2 ===0 ){
        return true;
    }
    return false;
}

const somar = numero => console.log("Recebi um numero: " + numero);
somar(6);

const somar1 = (numeroA, numeroB) => console.log("Recebi um numero: " + numeroA + numeroB);
somar1(6,7);

const somar2 = (numeroA, numeroB) => {
    return numeroA + numeroB
}
console.log(somar2(6,7));
