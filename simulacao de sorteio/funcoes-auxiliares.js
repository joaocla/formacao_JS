const numerosSorteados = [5, 50, 10, 98, 23]

function gets(){
    maiorNumero = 0
    for(i = 0; i < numerosSorteados.length; i++){
        if(numerosSorteados[i] > maiorNumero){
            maiorNumero = numerosSorteados[i]
        }else{maiorNumero = maiorNumero}
    }
    return maiorNumero;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
