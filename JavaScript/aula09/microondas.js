function microondas(comida, tempo) {
    let mensagem = "";

    switch (comida) {
        case "PIPOCA":
        if(tempo >= 10 && tempo <20){
            mensagem =  "Prato pronto, bom apetite!!!";
        }else if(tempo >= 20 && tempo < 30) {
            mensagem = "Sua comida queimou;"
        } else if(tempo >= 30) {
            mensagem = "KABUMMM"
        } else {
            mensagem = "Tempo insuficiente";
        }           
            break;

            
        case "MACARRAO":
            
            break;    
        
        case "CARNE":
            
                break;  

            case "FEIJAO":
            
            break;

            case "BRIGADEIRO":

                break;

        default:

            break;
    }
}


1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 