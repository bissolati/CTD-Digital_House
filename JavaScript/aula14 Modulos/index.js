let arrayModulo = require("./testeArray");

console.log(arrayModulo);

let nome1 = require("./teste2");
console.log(nome1);

let funcSoma = require("./funcao");
console.log(funcSoma(5,10));

//requisitando uma JSON
let dadosPessoal = require("./export-json");
console.log(`Meu nome é ${dadosPessoal.nome} ${dadosPessoal.Sobrenome} e tenho ${dadosPessoal.idade} anos`);
