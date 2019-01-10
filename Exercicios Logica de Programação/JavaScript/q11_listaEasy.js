const vendedor = {
    salario: 980.00,
    qtdCarrosVendidos: 4,
    valorVendas: 12000.00,
    valorPorCarro: 100,
    calcSalarioFinal(){
        return this.salario + (this.valorPorCarro * this.qtdCarrosVendidos) + (this.valorVendas * 0.05)
    }
}

console.log(`Salario final = ${vendedor.calcSalarioFinal()} R$`);
