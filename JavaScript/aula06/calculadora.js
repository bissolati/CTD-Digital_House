function somar(a, b){
    return a + b;
}
console.log(somar(10, 7));

function diminuir(a, b){
    return a - b;
}

function dividir(a, b){
    return a / b;
}

function multiplicar(a, b){
    return a * b;
}

function quadradoDoNumero(a) {
    var quadrado = multiplicar(a, a);
    return quadrado;
}

function mediaDeTresNumeros(a, b, c) {
    var somadedois = somar(a, b);
    var total = somar(somadedois, c);
    var divisao = dividir(total, 3); 
    var media = divisao;
    return media;
}

function calculaPorcentagem(a, b) {
    let dividirporc = dividir(b, 100);
    let multiplicarporc = multiplicar(dividirporc, a);
    return multiplicarporc
}

function geradorDePorcentagem(a, b) {
    var valor = multiplicar(dividir(a, b), 100);
    return valor;
}
var valor1 = 9;
var valor2 = 90;
var porcentagem = geradorDePorcentagem(valor1, valor2);

console.log ("---- Teste de Operações / Calculadora ----")

console.log("A soma é "+somar(5,7), "A subtração é "+ diminuir(10,8));

console.log("A multiplicação é "+multiplicar(5,7));

console.log("A divisão é "+dividir(5,7));

console.log("A divisão por zero é "+dividir(7,0));

console.log("O quadrado do numero é " + quadradoDoNumero(2));

console.log("A média de três é " + mediaDeTresNumeros(5,6,7));

console.log("A Porcentagem é "+ calculaPorcentagem(300, 15));

console.log(valor1 + " representa " + porcentagem + "% de " + valor2)