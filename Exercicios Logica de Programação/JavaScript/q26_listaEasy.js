const produto = {
    qtdAtualEstoque: 70,
    qtdMaxEstoque: 300, 
    qtdMinEstoque: 50,
    mediaEstoque(){
        return (this.qtdMaxEstoque + this.qtdMinEstoque)/2
    },
    status(){
        if(this.qtdAtualEstoque > this.mediaEstoque()){
            console.log('Nao efetuar compra');
        }else{
            console.log('Efetuar compra');
        }
    }
}

produto.status();