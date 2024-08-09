function maiorNumeroPar(array){
    numeroPar = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 && array[i] > numeroPar){
            numeroPar = array[i];
        }else{
            numeroPar = numeroPar;
        }
    }
    console.log(`O maior numero par é ${numeroPar}`);
}

module.exports = {maiorNumeroPar};
