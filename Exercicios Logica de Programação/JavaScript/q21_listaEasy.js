const inicio=20, fim=8

var horas

if(inicio > fim){
    horas = 24 - inicio + fim
}else{
    horas = fim - inicio
}

console.log(horas);
