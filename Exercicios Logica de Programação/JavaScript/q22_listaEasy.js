const f = {
    horasTrabalhadas: 50,
    salPorHora: 10,
    salario(){
        return 40 * 4 * this.salPorHora
    },
    salTotal(){
        return this.salario() + ((this.horasTrabalhadas - 40) * this.salPorHora) * 0.5
    }
}

console.log('Valor das horas extras = '+((f.horasTrabalhadas - 40) * f.salPorHora) * 0.5);
console.log(`Salario = ${f.salario()} R$`);
console.log(`Salario total = ${f.salTotal()} R$`);
