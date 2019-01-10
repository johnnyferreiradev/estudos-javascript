const anonimo = process.argv.indexOf('-a') !== -1

process.stdout.write('Digite um numero: ')
process.stdin.on('data', data =>{
    const numero = data.toString().replace('\n','')
    let n = parseInt(numero)
    console.log(--n);
})