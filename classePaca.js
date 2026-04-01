class carro{
    constructor (fabricante, modelo, cor, kmrodados, preco){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.kmrodados = kmrodados;
        this.preco = preco;
    }
    concessionaria(){
        console.log(`Bem vindo! O que você acha desse carro ${this.modelo}, de cor ${this.cor}, ele tem ${this.kmrodados}, ele é da fabricante ${this.fabricante}, o preço dele é ${this.preco}`
            
        )
    }


}