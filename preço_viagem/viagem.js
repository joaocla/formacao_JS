const precoEtanol = 3.96;
const precoGasolina = 6.66;
const combustivel = "gasolina";
const consumo = 0.1;
const distancia = 100;
let = valorViagem = 0

if(combustivel === "gasolina"){
    valorViagem = (distancia * consumo) * precoGasolina;
}else{
    valorViagem = (distancia * consumo) * precoEtanol;
}


console.log(`O Valor gasto de combustivel será de R$${valorViagem.toFixed(2)}`);