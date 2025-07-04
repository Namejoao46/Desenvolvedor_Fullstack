function calculadora(){
    const operacao = Number(prompt('ESCOLHA A OPERACAO:\n 1 - SOMA (+)\n 2 - SUBTRACÃO (-)\n 3 - MULTIPLICACÃO (*)\n 4 - DIVISÃO REAL (/)\n 5 - DIVISÃO INTEIRA (%)\n6 - POTENCIACÃO (**)'));
    let num1 = Number(prompt('Insira o primeiro valor'));
    let num2 = Number(prompt('Insira o segundo valor'));

    let resultado = calcular(operacao, num1, num2);
    alert ('Resultado: ' + resultado);

}

function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 1:
            return num1 + num2; // SOMA
        case 2:
            return num1 - num2; // SUBTRAÇÃO
        case 3:
            return num1 * num2; // MULTIPLICAÇÃO
        case 4:
            return num1 / num2; // DIVISÃO REAL
        case 5:
            return num1 % num2; // DIVISÃO INTEIRA 
        case 6:
            return num1 ** num2; // POTENCIAÇÃO
        default:
            return "Operação inválida!";
    }
}

calculadora();
