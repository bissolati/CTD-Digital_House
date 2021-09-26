function andar() {
    return 'está andando';
}
function parar() {
   return 'parou';
}

function acaoCarro(callback) {
    console.log(`O carro ${callback}`);
};

acaoCarro(andar());
acaoCarro(parar());


// function acaoCarro(acao) {
//     console.log("O carro " + acao());
// }

// function andar() {
//     return "está andando :) "
// }

// function parar() {
//     return "parou :( "
// }

// acaoCarro(andar);
// acaoCarro(parar);
