// O enunciado da questão foi escrito com erro. Debito acresce o valor do saldo, e na questão, diz que diminui
// Eu escrevi o codigo da maneira correta e não como o enunciado afirma

const conta = {
    numeroConta: 2258,
    saldo: 10000.00,
    debito: 2000.00,
    credito: 4000.00,
    saldoAtual(){
        return this.saldo + this.debito - this.credito
    },
    status(){
        if(this.saldoAtual() >= 0){
            console.log('Saldo positivo');
        }else{
            console.log('Saldo negativo');
        }
    }
}

console.log('Saldo atual = '+conta.saldoAtual());
conta.status()
