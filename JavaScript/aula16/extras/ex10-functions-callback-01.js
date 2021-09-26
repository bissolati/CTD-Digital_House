//Programador a bordo
//https://www.youtube.com/watch?v=sb_XEtwVsG0

function escrevaMensagem(mensagem) {
    console.log(mensagem);    
}
escrevaMensagem("Hello Word!");
escrevaMensagem("Marcelo Bissolati");

function soma(a,b) {
    return a+b;
}

var resutadoSoma = soma(10,5);
console.log(resutadoSoma);

//console.log(soma(10,6)); Pode-se usar o console.log direto pra imprimir

//funções com arrays

function somaTudo(numeros) {
    var total = 0;

    for (const num of numeros) {
        total = total + num;
    }
    return total;
}
var arraysNumeros = [3,5,7,10,9,12];
var resultado = somaTudo(arraysNumeros);
console.log(resultado);

//funções callbacks

function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b);
}
var multiplica = function (total) {
    return total * 2;
}

console.log(somaCallback(10, 3, multiplica));
//outro exemplo
console.log(somaCallback(5, 2, function (total) {
    return total + 20;
}));
//outro exemplo
console.log(somaCallback(23, 11, function (total) {
    return total / 2;
}));

//passar parâmetro padrão
function escreveNome(nome = 'Bissolati' , idade = 26) {
    console.log(nome);
    console.log(idade);
}
escreveNome('Marcelo');