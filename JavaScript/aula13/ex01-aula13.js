let dados = { //JSON
    "name" : "Marcelo Bissolati",
    "apelido" : "Marcelo",
    "idade" : 41,
    "usuario" : "bissolati", 
    "email" : "bissolatimarcelo@gmail.com"
}

//console.log(dados);

let carro = { //Objeto Literal
    cor : "branco", //Atributos
    andar : function (velocidade) { //Método, não vai o nome da função quando dentro e um objeto literal
        return "Andando na velocidade " + velocidade;
    }
}

console.log(carro.andar("150km"));