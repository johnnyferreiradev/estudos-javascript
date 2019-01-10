const f = {
    salario: 900.00,
    totalVendas: 3000.00,
    salarioTotal(){
        if(this.totalVendas <= 1500.00){
            return this.salario + (this.totalVendas * 0.03) 
        }else{
            return this.salario + (1500 * 0.03) + (this.totalVendas - 1500) * 0.05 
        }
    }
}

console.log(`Salario total = ${f.salarioTotal()} R$`);
