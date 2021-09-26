//Programador BR
//https://www.youtube.com/watch?v=zNimSYkrs6w

// function soma(a,b) { return a+b;}

//função anônima
//JavaScript é uma linguagem de programação funcional por isso permite que se atribua uma função ao uma variável
// var soma = function (a,b) { return a+ b}

//arrow function
// var soma = (a,b) => a+b


// console.log(soma(10,20));
// console.log(soma(7,8));
// console.log(soma(7,9));
// console.log(soma(6,8));
// console.log(soma(9,8));
// console.log(soma(1,8));

// var func = function(){console.log(this.nome);}
var func = ()=>{console.log(this.nome);} //arrow function não consgue acessar pelo this um objeto

var obj1 = {
    nome: "objeto 1",
    f: func,
}
var obj2 = {
    nome: "objeto 2",
    f: func,
}

obj1.f();
obj2.f();


