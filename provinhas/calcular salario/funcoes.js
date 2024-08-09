function calcularSalarioFinal(bruto, beneficios){
    let salarioFinal = 0
    if(bruto > 0 && bruto <= 1100){
        const salarioDesc = bruto * 0.95;
        salarioFinal = salarioDesc + beneficios;
    }else if(bruto > 1100 && bruto <= 2500){
        const salarioDesc = bruto * 0.90;
        salarioFinal = salarioDesc + beneficios;
    }else if(bruto > 2500){
        const salarioDesc = bruto * 0.85;
        salarioFinal = salarioDesc + beneficios;
    }
    console.log(salarioFinal.toFixed(2));
}

module.exports = {calcularSalarioFinal};
