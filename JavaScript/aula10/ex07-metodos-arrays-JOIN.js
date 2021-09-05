console.log("JOIN - Junta os elementos de um array usando um separador que especificamos.");
 console.log("Se não o especificar, use vírgulas.");

let cores = ['Roxo','Laranja','Azul'];

let separadosPorVirgula = cores.join(', ');

console.log('Separado por virgula: '+separadosPorVirgula);
console.log();
console.log('---------------------------------------------');
console.log();

let separadoPorTraco = cores.join(" - ");

console.log('Separado por Traço: '+separadoPorTraco);
