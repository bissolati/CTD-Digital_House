function FizzBuzz(n1, n2, palavra1, palavra2) {
    for (let i = 1; i <= 100; i++) {
 
        if(i % n1 === 0 && i % n2 === 0 ){ // verifica se os dois números
        console.log(`${i} = ${palavra1} e ${palavra2}`);

        } else if(i % n1 === 0){ //verifica se o número é multiplo 
            console.log(`${i} = ${palavra1}`);

        }else if(i % n2 === 0){ //verifica se número é multiplo 
            console.log(`${i} = ${palavra2}`);
        
        }else{
            console.log(i);
        } 
    }
}

FizzBuzz(3,7,'Multiplo 1º número', 'Multiplo 2º número');
