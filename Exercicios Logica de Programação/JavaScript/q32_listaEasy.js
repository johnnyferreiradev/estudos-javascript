class Time {
    constructor(nome, nGols){
        this.nome = nome
        this.nGols = nGols
    }
}

time1 = new Time('São paulo', '4')
time2 = new Time('Flamengo','1')

if(time1.nGols > time2.nGols){
    console.log(time1.nome + ' venceu');
}else if(time1.nGols < time2.nGols){
    console.log(time2.nome + ' venceu');
}else{
    console.log('Empate');
}
