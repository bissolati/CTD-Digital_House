function linha_separadora() {
    console.log();
    console.log("------------------------------------------------------------");
    console.log();           
}

let lista_de_compras_join = ['Maça','Banana','Creme dental','Sabonete'];
console.log();
console.log("Minha lista de compras: ");
console.log();
console.log("O método JOIN junta em uma String os itens de um Array");
console.log("Podemos separar cada item por um separador que escolhermos");
console.log("Ou por virgula caso não coloque nenhum separador");
console.log();

console.log("Array sem alteração: "); 
console.log(lista_de_compras_join);
console.log();

let nova_lista_join = lista_de_compras_join;
console.log("String retornada pelo Join: ");
console.log(nova_lista_join.join(", "));

linha_separadora();

console.log("O método POP exclui o último intem de um Array:");
console.log();

let lista_de_compras_pop = ['Maça','Banana','Creme dental','Sabonete'];
let nova_lista_pop = lista_de_compras_pop;

console.log("Array sem alteração: "); 
console.log(lista_de_compras_pop);
console.log();
console.log("String retornado pelo POP:");
console.log(nova_lista_pop.pop());
console.log();
console.log("Array após execução do POP:");
console.log(nova_lista_pop);

linha_separadora();

console.log("PUSH adiciona um item ao final do Array:");
console.log();

let lista_de_compras_push = ['Maça','Banana','Creme dental','Sabonete'];
let nova_lista_push = lista_de_compras_push;

console.log("Array sem alteração: "); 
console.log(lista_de_compras_push);
console.log();
console.log("Intem Carne adicionado:");
console.log(nova_lista_push.push("Carne"));
console.log();
console.log("Array após execução do PUSH:");
console.log(nova_lista_push);

linha_separadora();

console.log("SHIFT exclui o primeiro item de um Array :");
console.log();

let lista_de_compras_shift = ['Maça','Banana','Creme dental','Sabonete'];
let nova_lista_shift = lista_de_compras_shift;

console.log("Array sem alteração: "); 
console.log(lista_de_compras_shift);
console.log();
console.log("Primeiro item excluido:");
console.log(nova_lista_shift.shift());
console.log();
console.log("Array após execução do SHIFT:");
console.log(nova_lista_shift);

linha_separadora();

console.log("UNSHIFT adiciona um ou mais itens ao inicio de um Array");
console.log();

let lista_de_compras_unshift = ['Maça','Banana','Creme dental','Sabonete'];
let nova_lista_unshift = lista_de_compras_unshift;

console.log("Array sem alterações: ");
console.log(lista_de_compras_unshift);
console.log();
console.log("Item Feijão adicionado na primeira linha: ");
console.log(nova_lista_unshift.unshift("Feijão"));
console.log();
console.log("Array após a execução do UNSHIFT");
console.log(nova_lista_unshift);