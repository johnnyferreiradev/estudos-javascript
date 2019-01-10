const idade = function(anoAtual, anoNasc){
    return anoAtual - anoNasc
}

const verificaVoto = (anoAtual, anoNasc) => {
    if(idade(anoAtual, anoNasc) >= 16){
        console.log('Pode votar');
    }else{
        console.log('Não pode votar');
    }
}

verificaVoto(2018,1998);