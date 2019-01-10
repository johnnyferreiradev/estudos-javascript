const aluno = {
    n1: 10,
    n2: 10,
    n3: 10,
    media(){
        return (this.n1*2 + this.n2*3 + this.n3*5)/10
    }
}

console.log(`Media = ${aluno.media()}`);
