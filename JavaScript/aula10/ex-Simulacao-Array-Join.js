let lista = ['M','a','r','c','e','l','o'];

function join(Array) {
    let tamanhoLista = Array.length;
    let concatena = "";
    
        for (let index = 0; index < tamanhoLista; index++){
            concatena = concatena + Array[index];
    }
    return concatena
}

let concatenado = join(lista);
console.log(concatenado);