console.log("Comparação simples")

a = 10 == 15;
console.log("10 == 15 " + a); // Igualdade → false

b = 10 != 15;
console.log("10 != 15 " + b); // Desigualdade → true
console.log();

console.log("Comparação estrita");

c = 10 === "10";
console.log("10 === '10'" + c); // Igualdade estrita → false

d = 10 != 15;
console.log("10 != 15 "+ d); // Desigualdade estrita → true
console.log();

console.log("Comparação (continuação)");
e = 15 > 15;
console.log("15 > 15) "+ e); // Maior que → false
f = 15 >= 15;
console.log("15 >= 15 "+ f); // Maior ou igual a → true
g = 10 < 15;
console.log("10 < 15 "+ g); // Menor que → true
h = 10 <= 15;
console.log("10 <= 15 "+ h); // Menor ou igual a → true