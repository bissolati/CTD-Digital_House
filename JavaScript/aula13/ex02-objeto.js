let notebook = {
    marca: "Compaq",
    modelo: "Presario CQ43",
    armazenamento : "SSD",
    cor : "Preto",
    tela : "14",
    status :"Desligado",
    
    power : function (status) { //metodo
        this.status = status ? "Ligado" : "Desligado";
        if(status === true) 
            console.log("Ligando Notebook") //Quando se tem 1 linha penas não recisa das chaves { }.
        else
            console.log("Desligando Notebook")
    }
}

notebook.power(true);
console.log(notebook);




//exemplo everton
/*
let celular = {
    modelo: "moto G60",
    status: 'desligado',
    power : function (status) {
        this.status = status ? 'Ligado': 'Desligado';
        if (status === true)
        console.log('Ligando celular');
        else 
        console.log('Desligando celular');
    }
}

 celular.power(false);

console.log(celular);
*/