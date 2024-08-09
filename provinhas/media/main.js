const {calcularMedia, analisarMedia} = require('./funcoes');

function main(){
    const notas = [6, 6, 6, 6];
    const media = calcularMedia(notas);
    analisarMedia(media);
}

main();
