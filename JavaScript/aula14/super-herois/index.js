const SuperHerois =[
    {
        nome: "Wonder Woman",
        poder: "Golpear com chicote",
        cumprimentar: function(){
            return "Olá, sou " + this.nome;
        }
    },
    {
        nome: "Iron Man",
        poder: "Disparar raios",
        cumprimentar: function() {
            return "Ola, sou " + this.nome;
        }
    }
]

module.exports = SuperHerois;

