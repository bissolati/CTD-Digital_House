
const somar = (numeroA, numeroB) => numeroA + numeroB; 
// console.log(somar(1,1));


const subtrair = (numeroA, numeroB) => numeroA - numeroB;
// console.log(subtrair(3,1));

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);


console.log(calculadora(10,20, somar));

/*Função tradicional
function somar2(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somar2(2,2));

Função tradicional
function calculadora2(numero1, numero2, operacao){ //Função Pai
    return numero1, numero2
}
*/