/*3. Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar
utilizar dois loops (for)*/

/*console.log("------Tabuada 1 ------------")
for(i = 1; i <= 10; i++){
    console.log("1 X "+ i + " = " + i * 1 );

}

console.log("---------------------------------------------");*/


for(i = 1; i <= 10; i++){
    console.log("------Tabuada do " + i +" ------------")

    for(x = 1; x <= 10; x++){
        let resultado = i * x;
        console.log(i + " X " + x + " = " + resultado );
    }
}