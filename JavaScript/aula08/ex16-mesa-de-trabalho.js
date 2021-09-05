/*function podeSubir(altura, acompanhada) {
    if(altura >= 1.40 && altura <= 2.00){
        console.log("Pode subir :D!");

    }else if (altura < 1.40  &&  acompanhada) {
        console.log("Deverá subir acompanhada");

    } else {
        console.log("Não poderá subir");   
    }   
}
podeSubir(2,true);
*/

/*function podeSubir(altura, acompanhada) {
    let podesubir = "";
    if((altura >= 1.40 && altura <= 2.00) || (altura < 1.40  &&  acompanhada == true)) {
        podesubir = true;

    } else {
        podesubir = false;
    }   
    return console.log(podesubir)
}
podeSubir(2,true);*/

function podeSubir(altura, acompanhada) {
    let subir = "";
    if((altura >= 1.40 && altura <= 2.00) || (altura < 1.40  &&  acompanhada == true)) {
        subir = true;

    } else {
        subir = false;
    }   
    return subir;
}   

if (podeSubir(2,true)) {
    console.log("Pode subir")
} else{
    console.log("Não pode subir")
}