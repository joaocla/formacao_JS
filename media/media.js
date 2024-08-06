const nota1 = 10;
const nota2 = 9;
const nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log(`Sua media foi ${media.toFixed(2)}, reprovado!`);
} else if(media >= 5 && media <= 7){
    console.log(`Sua media foi ${media.toFixed(2)}, recuperação!`)
} else{
    console.log(`Sua media foi ${media.toFixed(2)}, aprovado!`)
}