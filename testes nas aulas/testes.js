let notas = [9, 10, 9, 6]; 

function calcularMedia(){
    media = 0;
    for(i = 0; i < notas.length; i++){
        media = media + notas[i];
    }
    mediaFinal = media/notas.length;
    return mediaFinal;
}

function analisarMedia(){
    if(calcularMedia() < 5){
        return `Reprovado`;
    }else if(calcularMedia() >= 6 && calcularMedia() <= 7){
        return `Recuperação`;
    }else{
        return `Aprovado`;
    }
}

function main(){
    mediaFinal = calcularMedia();
    mediaAnalisada = analisarMedia();

    return console.log(`Média final: ${mediaFinal}\nSituação no semestre: ${mediaAnalisada}`);
}

main();
