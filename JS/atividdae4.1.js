function Banco(conta, saldo, tipo_de_conta, agencia) {
    this.conta = conta;
    this.saldo = saldo,
    this.tipo_de_conta = tipo_de_conta,
    this.agencia = agencia;

    this.buscarSaldo = function(){
        console.log("Seu saldo atual: R$"+this.saldo);
    }

    this.deposito = function(transferencia){
        this.saldo += transferencia;
    }

    this.saque = function(transferencia){
        this.saldo -= transferencia;
    }

    this.numeroConta = function(){
        this.conta;
        this.tipo_de_conta;
        this.agencia;
        console.log("Seu numero de conta é: "+this.agencia, this.tipo_de_conta, this.conta);
    }
};

let readData = require('readline-sync');
let informacao,valor;

var minhaConta = new Banco("12345678-9", 1000, "013(poupanca)", "0414");
minhaConta.numeroConta();
minhaConta.buscarSaldo();
informacao = readData.question("Deseja depositar(d) ou sacar(s)?");
switch(informacao){
    case 'd':
        valor = parseFloat(readData.question("Digite o valor do deposito: "));
        minhaConta.deposito(valor);
        break;
    case 's':
        valor = parseFloat(readData.question("Digite o valor do deposito: "));
        minhaConta.saque(valor);
        break;
    default:
        console.log("ERRo");
        break;
}
minhaConta.buscarSaldo();
