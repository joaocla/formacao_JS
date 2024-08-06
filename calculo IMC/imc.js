function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return console.log(`IMC = ${imc.toFixed(2)}, abaixo do peso`);
    } else if(imc >= 18.5 && imc < 25){
        return console.log(`IMC = ${imc.toFixed(2)}, peso normal`);
    } else if(imc >= 25 && imc < 30){
        return console.log(`IMC = ${imc.toFixed(2)}, acima do peso`)
    } else if(imc >= 30 && imc <= 40){
        return console.log(`IMC = ${imc.toFixed(2)}, obesidade`);
    } else return console.log(`IMC = ${imc.toFixed(2)}, obesidade grave`);
}

function main(){
    const altura = 1.81;
    const peso = 120;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
