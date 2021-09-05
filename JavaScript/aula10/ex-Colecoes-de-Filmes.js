function linhaSeparadora() {
    console.log();
    console.log("----------------------------------------------------------------------------");
    console.log();
}

let FilmesSeries1 = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log("Filmes e Séries em minúsculo 01: ");
console.log(FilmesSeries1);
console.log();

function converterEmMaiusculas1(Array) {
    let FilmesSeriesM1 = [];

    for (let index = 0; index < Array.length; index++) {
        FilmesSeriesM1.push(FilmesSeries1[index].toUpperCase()); // Push adiciona sempre no final               
    }
    return FilmesSeriesM1;
}
    let FilmesSeriesMaiusculas1 = converterEmMaiusculas1(FilmesSeries1);
    console.log("Filmes e Séries em Maiúsculas 01");
    console.log(FilmesSeriesMaiusculas1);

    linhaSeparadora();


    let FilmesSeries2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
    console.log("Filmes e Séries em minúsculo 02: ");
    console.log(FilmesSeries2);
    console.log();

linhaSeparadora();

    console.log("Função que remove o Jogo Fortnite da 2ª lista de filmes:");
    console.log();

    let ultimoFilme = FilmesSeries2.pop();
    console.log("Item removido: ");
    console.log(ultimoFilme);

linhaSeparadora();


function converterEmMaiusculas2(Array) {
    let FilmesSeriesM2 = [];
 
    for (let index = 0; index < Array.length; index++) {
        FilmesSeriesM2.push(FilmesSeries2[index].toUpperCase()); // Push adiciona sempre no final               
    }
 
    return FilmesSeriesM2;
}
    let FilmesSeriesMaiusculas2 = converterEmMaiusculas2(FilmesSeries2);
    console.log("Filmes e Séries em Maiúsculas 02");
    console.log(FilmesSeriesMaiusculas2);

linhaSeparadora();

function MesclarArrays(array1, array2) {
    let recebeArray = [];
   
    for (let index1 = 0; index1 < array1.length; index1++) {
        recebeArray.push(array1[index1]);            
     }

     for (let index2 = 0; index2 < array2.length; index2++) {
        recebeArray.push(array2[index2]);
     }
     return recebeArray;
    }

let TodosFilmesSeries = MesclarArrays(FilmesSeriesMaiusculas1, FilmesSeriesMaiusculas2);
console.log("Todos os Filmes e Séries:");
console.log(TodosFilmesSeries);


linhaSeparadora();

console.log("Classificações dos usuários:")

const asiaScore = [8,10,6,9,10,6,6,8,4];
 const euroScore = [8,10,6,8,10,6,7,9,5];

 function compareNotas(elemento1, elemento2) {
    if(elemento1.length != elemento2.length){
        return "Arrays diferentes";
    } 
    
    for (let i = 0; i < elemento1.length; i++)
    if(elemento2[i] == elemento1[i]){
        console.log('Nota igual: ' + elemento1[i] + ' = ' + elemento2[i]);
    }else{
        console.log('Nota Diferente: ' + elemento1[i] + ' = ' + elemento2[i]);
    }
}

compareNotas(asiaScore, euroScore);
