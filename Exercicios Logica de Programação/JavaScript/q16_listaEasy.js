const maca = {
    preco1: 1.30,
    preco2: 1.00,
    valor(preco, qtd){
        return preco * qtd
    }
}

const qtd = 7

if(qtd < 6){
    console.log(maca.valor(maca.preco1, qtd));
}else{
    console.log(maca.valor(maca.preco2, qtd));
}



