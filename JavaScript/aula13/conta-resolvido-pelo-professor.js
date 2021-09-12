let Conta = function(num, tipo, saldo, titular){//construtura
    this.numero = num;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let user1 = new Conta(159357, "Corrente", 1500, "Marcos Santana");

//console.log(user1);

let clientes = [
    {
        "conta": "5486273622",
        "tipoConta": "Conta Corrente",
        "saldo": 27771,
        "titular": "Abigael Natte"
    },
    {
        "conta": "1183971869",
        "tipoConta": "Conta Poupança",
        "saldo": 8675,
        "titular": "Ramon Connell"
    },
    {
        "conta": "9582019689",
        "tipoConta": "Conta Poupança",
        "saldo": 27363,
        "titular": "Jarret ente"
    },
    {
        "conta": "1761924656",
        "tipoConta": "Conta Poupança",
        "saldo": 32415,
        "titular": "Ansel Ardley"
    },
    {
        "conta": "7401971607",
        "tipoConta": "Conta Poupança",
        "saldo": 18789,
        "titular": "Jacki Shurmer"
    },
    {
        "conta": "630841470",
        "tipoConta": "Conta Corrente",
        "saldo": 28776,
        "titular": "Jobi Mawtus"
    },
    {
        "conta": "4223508636",
        "tipoConta": "Conta Corrente",
        "saldo": 2177,
        "titular": "Thomasin Latour"
    },
    {
        "conta": "185979521",
        "tipoConta": "Conta Poupança",
        "saldo": 25994,
        "titular": "Lonnie eijden"
    },
    {
        "conta": "3151956165",
        "tipoConta": "Conta Corrente",
        "saldo": 7601,
        "titular": "Alonso Wannan"
    },
    {
        "conta": "2138105881",
        "tipoConta": "Conta Poupança",
        "saldo": 33196,
        "titular": "Bendite Huggett"
    },
];

//console.log(clientes[1].titular);
let listaContas = [];
//listaContas.push(new Conta(clientes[1].conta, clientes[1].tipoConta, clientes[1].saldo, clientes[1].titular) );

for (let i = 0; i < clientes.length; i++) {
    listaContas.push(new Conta(clientes[i].conta, clientes[i].tipoConta, clientes[i].saldo, clientes[i].titular) );
}

//console.log(listaContas);

let Banco = {
    clientes : listaContas,
    consultarCliente : function(nome){
        console.log(this.clientes);
        console.log(nome);// é o nome que deve ser pesquisado dentro da lista
        //percorrer a lista 
        //localizar o nome 
        // retornar o obj do cliente 
    }
}

Banco.consultarCliente("Bendite");

