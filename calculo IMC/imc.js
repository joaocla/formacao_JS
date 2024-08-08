class Pessoas{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (peso / Math.pow(altura, 2)).toFixed(2);
    }
    descrever(){
        return `Olá, me chamo ${this.nome} e meu IMC é ${this.imc}`
    }
    classificarImc(){
        if(this.imc < 18.5){
            return console.log(`abaixo do peso`);
        } else if(this.imc >= 18.5 && this.imc < 25){
            return console.log(`peso normal`);
        } else if(this.imc >= 25 && this.imc < 30){
            return console.log(`acima do peso`)
        } else if(this.imc >= 30 && this.imc <= 40){
            return console.log(`obesidade`);
        } else return console.log(`obesidade grave`);
    }
}

const jose = new Pessoas('Jose', 120, 1.80);
console.log(jose.descrever());
console.log(jose.classificarImc());