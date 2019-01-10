const carro = {
    custoFabrica: 40000,
    percFornecedor: 0.28,
    imposto: 0.45,
    custoFinal(){
        return this.custoFabrica + (this.custoFabrica * this.percFornecedor) + (this.custoFabrica * this.imposto)
    }
}

console.log(`Custo final = ${carro.custoFinal()} R$`);
