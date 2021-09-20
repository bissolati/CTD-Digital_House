const herois = require("./super-herois"); //recebo o objeto literal

let heroisJson = JSON.stringify(herois); // Converte os dados da string herois para JSON

//console.log(heroisJson);

const fs = require('fs'); //chamando o File System
const path = require('path'); //traz o caminho do arquivo

const caminhoSuperHeroisJson = path.join("superHerois.json") //junta o endereço com o nome do arquivo

fs.writeFileSync(caminhoSuperHeroisJson, heroisJson); //Escreve por cima do arquivo



