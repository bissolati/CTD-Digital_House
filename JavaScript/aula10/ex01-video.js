console.log("Length retorna o cumprimento de uma string.");
let texto = "Oi eu sou o Marcelo"; 
console.log("O tamanho da string é: "+ texto.length);
console.log();

console.log("IndexOf verifica se uma letra ou palavra existe dentro da string.");
console.log("Se o resultado for maior que zero existe a palavra, se for -1 não existe: "+ texto.indexOf("Marcelo"));
console.log();

console.log("Slice tem que indicar a posição inicial e a final para retornar uma parte do texto");
let posicaoInicial = 0;
let posicaoFinal = 2;
let palavra = texto.slice(posicaoInicial,posicaoFinal);
console.log("A palavra que está na posição inicial "+posicaoInicial+" e na posição final "+posicaoFinal+ " é: " + palavra);
console.log();



