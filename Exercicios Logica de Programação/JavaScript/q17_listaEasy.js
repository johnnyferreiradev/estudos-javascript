const aluno = {
    nota1: 6.00,
    nota2: 8.00,
    media(){
        return (this.nota1 + this.nota2)/2
    }
}

if(aluno.media() >= 6){
    console.log(`Aprovado com media ${aluno.media()}`);
}else{
    console.log(`Reprovado. Media = ${aluno.media()}`);
}