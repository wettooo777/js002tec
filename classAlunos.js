class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;

    }

    obterStatus() {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Em Recuperação";
        } else {
            return "Reprovado";
        }

    }

    exibirRelatorio() {
        console.log(`Relatorio do Aluno: ${this.nome}`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Media: ${this.calcularMedia()}`);
        console.log(`Status: ${this.obterStatus()}`);
    }

}

let aluno1 = new Aluno("João Pedro", 6700, [6.7, 8.0, 9.8]);
console.log(aluno1.calcularMedia());
console.log(aluno1.obterStatus());
aluno1.exibirRelatorio();



