
//Transforme as seguintes funções em arrow functions:

/*function print(mensagem){
  console.log(mensagem)
}
print("Olá, bom dia")*/

let imprimir = () => console.log("Olá, bom dia");
imprimir(); 

/*function soma(n1, n2){
  return n1 + n2
}
 
console.log(soma(10, 10))*/

let soma = (n1, n2) => n1 + n2
console.log(soma(10,10));
