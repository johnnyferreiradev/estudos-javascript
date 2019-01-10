const candidato = {
    votos: 2000,
    brancos: 100,
    nulos: 10,
    validos(){
        return this.votos - this.brancos + this.nulos
    },
    percBrancos(){
        return (this.brancos * 100)/this.votos
    },
    percNulos(){
        return (this.nulos * 100)/this.votos
    },
    percValidos(){
        return (this.validos() * 100)/this.votos
    }
}

console.log(candidato.votos);
console.log(candidato.brancos);
console.log(candidato.nulos);
console.log(candidato.validos());
console.log(`Brancos: ${candidato.percBrancos()}%`);
console.log(`Nulos: ${candidato.percNulos()}%`);
console.log(`Validos: ${candidato.percValidos()}%`);




