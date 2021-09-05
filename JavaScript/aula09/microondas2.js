function pipoca(tempo){

    let  info_menu = " ";

    if(tempo<10){
        info_menu ="** :O Tempo Insuficiente :o **";
    }else if(tempo>=10 && tempo <20){
        info_menu="** ♥ Prato Perfeito ♥ ***";
    }else if ( tempo >=20 && tempo<30){
        info_menu="** :( Comida Queimou  :( ***" ;
    }else{
        info_menu="**XX Kabuumm =( *****";
    }
    return info_menu;
}

function macarrao(tempo){

    let  info_menu = " ";

    if(tempo<8){
        info_menu ="** :O Tempo Insuficiente :o **";
    }else if(tempo>=8 && tempo <16){
        info_menu="** ♥ Prato Perfeito ♥ ***";
    }else if ( tempo >=16 && tempo<24){
        info_menu="** :( Comida Queimou  :( ***" ;
    }else{
        info_menu="**XX Kabuumm =( *****";
    }
    return info_menu;
}

function carne(tempo){

    let  info_menu = " ";

    if(tempo<15){
        info_menu ="** :O Tempo Insuficiente :o **";
    }else if(tempo>=15 && tempo <30){
        info_menu="** ♥ Prato Perfeito ♥ ***";
    }else if ( tempo >=30 && tempo<45){
        info_menu="** :( Comida Queimou  :( ***" ;
    }else{
        info_menu="**XX Kabuumm =( *****";
    }
    return info_menu;
}

function feijao(tempo){

    let  info_menu = " ";

    if(tempo<12){
        info_menu ="** :O Tempo Insuficiente :o **";
    }else if(tempo>=12 && tempo <24){
        info_menu="** ♥ Prato Perfeito ♥ ***";
    }else if ( tempo >=24 && tempo<36){
        info_menu="** :( Comida Queimou  :( ***" ;
    }else{
        info_menu="**XX Kabuumm =( *****";
    }
    return info_menu;
}

function brigadeiro(tempo){

    let  info_menu = " ";

    if(tempo<8){
        info_menu ="** :O Tempo Insuficiente :o **";
    }else if(tempo>=8 && tempo <16){
        info_menu="** ♥ Prato Perfeito ♥ ***";
    }else if ( tempo >=16 && tempo<24){
        info_menu="** :( Comida Queimou  :( ***" ;
    }else{
        info_menu="*** )=  Kabuumm  =( ****";
    }
    return info_menu;

}



console.log("***MENU MICROONDAS***")
console.log("*Escolha uma das opções**")
console.log("1 - Pipoca – 10 segundos (padrão)\n2 - Macarrão – 8 segundos (padrão)\n3 - Carne – 15 segundos (padrão)\n4 - Feijão – 12 segundos (padrão)\n5 - Brigadeiro – 8 segundos (padrão)")
let food=1;

switch (food) {
    case 1:
        console.log("Você escolheu Pipoca")
        console.log(pipoca(30));
        console.log("Prato pronto, bom apetite!!!")
        break;

    case 2:
        console.log("Você escolheu Macarrão")
        console.log(macarrao(8));
        console.log("Prato pronto, bom apetite!!!")
    break;
    case 3:
        console.log("Você escolheu Carne")
        console.log(carne(15));
        console.log("Prato pronto, bom apetite!!!")
    break;

    case 4:
        console.log("Você escolheu Feijão")
        console.log(feijao(10));
        console.log("Prato pronto, bom apetite!!!")
    break;

    case 5:
        console.log("Você escolheu Brigadeiro")
        console.log(brigadeiro(8));
        console.log("Prato pronto, bom apetite!!!")
        break;

    default:
            console.log("Prato Inexistente");

        break;
}