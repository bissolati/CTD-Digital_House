function Usuario() {
    this.nome = 'Marcelo'
    this.idade = 27;
    this.soma = function (a, b) {
        return a + b;
    }
};

var usuario = new Usuario();
console.log(usuario);
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.soma(10,4));

