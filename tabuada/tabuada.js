function tabuada(numero){
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

function tabuadaCompleta(){
    numero = 1;
    while(numero <= 10){
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
        console.log('---------------------')
        numero++;
    }
}

function main(){
    escolha = 2
    if(escolha === 1){
        tabuada(5);
    }else{
        tabuadaCompleta();
    }
}

main();
