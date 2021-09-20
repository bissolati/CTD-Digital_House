const herois = require("./super-herois");

const fs = require('fs');

let dados = fs.readFileSync(__dirname + '/ex02-video-dados.txt', 'utf-8');
let filmes = fs.readFileSync(__dirname + '/estreias-2020.txt', 'utf-8');

console.log(dados);
console.log(filmes);

let moment = require('moment');

let data = moment().format("MMM Do YY");  
let data2 = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(data);
console.log(data2);
console.log(herois);
// console.log(herois[0].cumprimentar());
