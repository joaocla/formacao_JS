class Carros{
    constructor(marca, cor, consumoMedio){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
}

function calcularViagem(distancia, precoCombustivel, consumoMedio){
    const litrosNecessarios = distancia / consumoMedio;
    const gastoTotal = litrosNecessarios * precoCombustivel;
    return gastoTotal.toFixed(2);
}

const corolla = new Carros('Toyota', 'Preto', 12.5);
const civic = new Carros('Honda', 'Azul', 10.5)
const onix = new Carros('Chevrolet', 'Branco', 11.5)

console.log(civic);
console.log(calcularViagem(300, 5.19, civic.consumoMedio));