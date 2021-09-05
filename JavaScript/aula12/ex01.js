// 1 Escreva um programa para ler 2 valores (considerando que não serão iguais) e escrever o maior deles
let a = 2;
let b = 6;

if( a > b){//aqui o a é maior que b
    console.log("O valor "+ a +" é o maior");
} else {
    console.log("O valor "+ b +" é o maior");
}
console.log("----------------------------");
// 2 Escreva um program que verifique a validade de uma senha fornecida pelo usuario
// a senha valida é 1234
//deve ser impresso:
//Acesso permitido caso a senha seja valida
//Acesso negado caso a senha seja invalida.
let senha = "";
if((senha == 1234)||(senha == 159)){
    console.log("ACESSO PERMITIDO!");
}else if(senha == ""){
    console.log("DIGITE SUA SENHA");
}else{
    console.log("ACESSO NEGADO!");
}
console.log("----------------------------");

//Neste exercicio, você criará uma função somaArray() que aceita um array
//de numeros e retorna a soma de todos eles

let valores = [2,5,7,8,9,10];

function somarArray(p){
    let qtd = p.length;
    let soma = 0;

    for(let contador =0; contador < qtd; contador++){
        soma = soma + p[contador];
    }
    return soma;
}

let valor = somarArray(valores);
console.log(valor);