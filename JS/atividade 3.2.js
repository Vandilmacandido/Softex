let soma = (number1, number2) => {
    console.log("Resultado da soma é igual: " + (number1 + number2));
}
let subtracao = (number1, number2)=> {
    console.log("Resultado da subtração é igual: " + (number1 - number2));
}
let multiplicacao = (number1, number2)=> {
    console.log("Resultado da multiplicação é igual: " + (number1 * number2));
}
let divisao = (number1, number2)=> { 
    console.log("Resultado da divisão é igual: " + (number1 / number2));
}

function receber_num(op, num1, num2){
    switch(op){
        case '+':
            soma(num1,num2);
            break;
        case '-':
            subtracao(num1,num2);
            break;
        case '*':
            multiplicacao(num1,num2);
            break;
        case '/':
            num2 != 0 ? divisao(num1,num2) : console.log("Não eh possivel dividir por 0!");
            break;
        default:
            console.log("Operador Invalido!!!")
            break;
    }
}

function calculadora(){
    let readData = require('readline-sync');
    let n1, n2, operador;

    operador = readData.question("Digite a operacao que deseja fazer (+;-;*;/): ");
    n1 = parseFloat(readData.question("Digite o *PRIMEIRO* valor: "));
    n2 = parseFloat(readData.question("Digite o *SEGUNDO* valor: "));
    
    receber_num(operador,n1,n2);
}

calculadora();
