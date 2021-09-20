const fs = require('fs');
const path = require('path');

let caminhoArquivo = path.join("prova.txt");

//fs.writeFileSync(caminhoArquivo, "Prova 1")  Substitui todo o conteudo do arquivo prova.txtx
fs.appendFileSync(caminhoArquivo, "Prova final") // adiciona no final do arquivo 


