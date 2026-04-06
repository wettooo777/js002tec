class ContaBancaria {
    #saldo = 0;

    constructor(titular) {
        this.titular = titular;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} feito.`);
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito`);
        }

        else {
            console.log("Saldo insuficiente ou valor inválido");

        }
    }
    exibirSaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
}

const conta1 = new ContaBancaria("Mailon Peres");
conta1.depositar(1000);
conta1.depositar(100);
conta1.depositar(10);
conta1.depositar(10);
conta1.depositar(100);
conta1.sacar(67);
conta1.sacar(91);
conta1.sacar(1000);
console.log(conta1.exibirSaldo())
