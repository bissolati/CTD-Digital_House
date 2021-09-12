function Carro(marca, modelo) { // Por conveção geralmente nomeamos funções contrutoras com a primeira letra em maúscula.
    this.marca = marca;
    this.modelo = modelo;
};

let meuCarro = new Carro('Crevrolet', 'Nivus');
let outroCarro = new Carro('Renault','Duster');

console.log(meuCarro);
console.log(outroCarro);