function calcularMedia(array){
    media = 0;
    for(let i = 0; i < array.length; i++){
        media = media + array[i];
    }
    mediaFinal = media/array.length;
    return mediaFinal;
}

function analisarMedia(media){
    if(media < 5){
        console.log(`Reprovado`);
    }else if(media >= 5 && media < 7){
        console.log(`Recuperação`);
    }else{
        console.log(`Aprovado`);
    }
}

module.exports = {calcularMedia, analisarMedia};
