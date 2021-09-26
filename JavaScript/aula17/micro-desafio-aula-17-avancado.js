//Crie uma função que receba um array composto por números e retorna uma nova matriz (array)
//com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

console.log('Exercicio 01');
let numeros = [1, 5, 6, 9, 11, 30];

function dividePelaSoma(array) {
    let soma = array.reduce(function (acumulador, numero){
         return acumulador + numero}); //soma de todos itens do array

         let divisao = array.map(function (parametro){
             return parametro / soma});  //divide cada item do array pela soma

         return divisao;
}
console.log(dividePelaSoma(numeros));

//Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) 
//com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado.
// (verifique como funciona o método filter ())

console.log('Exercicio 02');

let palavras = ['Janeiro','Fevereiro','Março','Abril','Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

function palavrasNumeros(palavra, numero) {
    return palavra.filter(function (p) {
        return p.length > numero;
    })
}

console.log(palavrasNumeros(palavras, 5));


//Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos:
//nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em 
//ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método
// seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
console.log('Exercicio 03');

let alunos = [
    { nome: 'Joana', nota: 8 },
    { nome: 'Mariana', nota: 10 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Tiago', nota: 5 },
    { nome: 'André', nota: 9 },
];

function ordernarNota(aluno) {
    console.log("Ordenando os números: ");
    return aluno.sort(function (a, b) {
        return b.nota - a.nota
    })    
}

function ordernarNome(aluno) {
    console.log("Ordenando os nomes: ");
    return aluno.sort(function (a, b) {
        if (a.nome > b.nome){
            return 1;
        }
        if (a.nome < b.nome){
            return -1;
        }
        return 0;
    });
}

console.log(ordernarNome(alunos));
console.log(ordernarNota(alunos));