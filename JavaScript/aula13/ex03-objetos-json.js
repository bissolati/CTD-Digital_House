let json = {
        "nome" : "Marcos",
        "sobrenome" : "Santana",
        "idade" : 25,
        "linguagens" : ["PHP","JS", "Ruby"],
        "ramoProfissional" : {
            "experiencia" : "hard",
            "anos" : 7
        }
}

console.log(json.ramoProfissional.experiencia);