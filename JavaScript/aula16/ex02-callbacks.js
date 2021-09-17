function somar(a,b,cb) {
    return a+b+cb();
}

function texto() {
    return ' esse é o resultado';
}

console.log(somar(5,3, texto));



//console.log(texto());

function somar1(a,b,cb) {
    let result = a + b;
    return cb(result);
}

//function texto(p1) {
//    return ' esse é o resultado' + p1;
//}

console.log(somar1(5,3, texto));


console.log(somar1(5,3, function(p){
    return 'esse é o resultado ' + p;  //chamar função sem nome
})
);

