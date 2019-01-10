const alcool = {
    valor: 2.90
}

const gasolina = {
    valor: 3.30
}

function desconto(tipo, qtdLitros) {
    if(tipo == 'G'){
        if(qtdLitros <= 20){
            return qtdLitros *  (gasolina.valor - (gasolina.valor * 0.04))
        }else{
            return qtdLitros * (gasolina.valor - (gasolina.valor * 0.06))
        }
    }else if(tipo == 'A'){
        if(qtdLitros <= 20){
            return qtdLitros *  (gasolina.valor - (gasolina.valor * 0.03))
        }else{
            return qtdLitros * (gasolina.valor - (gasolina.valor * 0.05))
        }
    }else{
        console.log('Tipo não registrado')
    }
}

console.log('Total a pagar = '+desconto('A',5));
