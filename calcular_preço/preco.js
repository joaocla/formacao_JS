function calcularPreco(valorEtiqueta, metodoPagamento, valorPagamento){
    switch(metodoPagamento) {
        case 1:
            valorPagamento = valorEtiqueta * 0.90;
            return console.log(`O metodo de pagamento selecionado foi Débito, portando o valor a ser pago sera de R$${valorPagamento.toFixed(2)} apos o desconto de 10%`)
        case 2:
            valorPagamento = valorEtiqueta * 0.85;
            return console.log(`O metodo de pagamento selecionado foi PIX, portando o valor a ser pago sera de R$${valorPagamento.toFixed(2)} apos o desconto de 15%`)
            
        case 3:
            valorPagamento = valorEtiqueta;
            return console.log(`O metodo de pagamento selecionado foi Credito em 2 vezes, portando o valor a ser pago sera de R$${valorPagamento.toFixed(2)}`)
            
        case 4:
            const numeroParcelas = 4;
            valorPagamento = valorEtiqueta * 1.10;
            return console.log(`O metodo de pagamento selecionado foi Credito em ${numeroParcelas} vezes, portando o valor a ser pago sera de R$${valorPagamento.toFixed(2)} apos o acrescimo de 10% de juros.`)
            
        default:
            return console.log('metodo de pagamento inexistente');
    }
}

calcularPreco(100, 2, 0);
