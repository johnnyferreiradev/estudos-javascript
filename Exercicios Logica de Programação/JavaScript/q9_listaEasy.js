const f = {
    salario: 4500.00,
    reajuste: 0.1,
    calReajuste(){
        return this.salario + this.salario * this.reajuste
    }
}

console.log(`Novo salario = ${f.calReajuste()} R$`);
