console.log("O Trim elimina espaços que estão no começo e no final de uma string.");
let texto = "      Sou um ser humano.        "
console.log("Texto com espaço :"+texto);
console.log("Texto sem espaço :"+texto.trim());
console.log();

console.log("Split permite converter uma string em um array");
let parametro = " ";
console.log(texto.split(parametro));
console.log();

console.log("Replace, permite substituir uma parte do texto por outra string");
oQueVoceQuerBuscar = "      ";
suaSubstituicao = "Troquei seis espaços em branco, "
console.log(texto.replace(oQueVoceQuerBuscar,suaSubstituicao));
console.log();