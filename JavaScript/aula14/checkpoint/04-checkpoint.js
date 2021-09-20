let frutasAmarelas = ['Melão','Mamão', 'Limão Siciliano'];
let frutasVermelhas = ['Morango','Cereja','Maçã red'];
let frutasVerdes = ['Limão','Kiwi','Maça verde'];

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas = [...frutasAmarelas, ...frutasVermelhas1,...frutasVerdes]
console.log(todasFrutas);