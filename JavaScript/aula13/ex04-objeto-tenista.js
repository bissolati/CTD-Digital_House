let tenista = {
    nome: 'Roger',
    idade: 38,
    saudacao: function(){
        return 'Olá, me chamo ' + this.nome;
    }
};
console.log(tenista.saudacao());
