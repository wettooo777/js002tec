class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log (`Olá, Meu nome é ${this.nome}!`)
    }       

    aniversario(){
        this.idade += 1;
        console.log (`Feliz aniversário, agora o ${this.nome} tem ${this.idade}`)
    }
}

let pessoa1 = new Pessoa ("Filho do Alejeba", 67, "Professor de orientação sexual");
pessoa1.saudar();
pessoa1.aniversario();