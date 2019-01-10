const v1= 5, v2 = 6, v3 = 3

const vetor = []

vetor.push(v1,v2,v3)

function somaDoisMaiores(vetor){
    var menor = v1;
    vetor.forEach(valor => {
        if(menor > valor){
            menor = valor
        }
    })

    return v1 + v2 + v3 - menor;
}

console.log(somaDoisMaiores(vetor));



