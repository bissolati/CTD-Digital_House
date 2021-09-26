function FizzBuzz(n1, n2) {
    for (let i = 1; i <= 100; i++) {
 
        if(i % n1 === 0 && i % n2 === 0 ){ // verifica se os dois números
        console.log(`${i} = FizzBuzz`);

        } else if(i % n1 === 0){ //verifica se o número é multiplo 
            console.log(`${i} = Fizz`);

        }else if(i % n2 === 0){ //verifica se número é multiplo 
            console.log(`${i} = Buzz`);
        
        }else{
            console.log(i);
        } 
    }
}

FizzBuzz(3,7);
