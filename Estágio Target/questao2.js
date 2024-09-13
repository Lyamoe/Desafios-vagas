/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
pertence ou não a sequência. */

const NUMERO_SELECIONADO = parseInt(prompt("Insira um numero inteiro: "));
let valor1 = 1;
let valor2 = 2;
let guardarValor = 0;

while (valor1 <= NUMERO_SELECIONADO || valor2 <= NUMERO_SELECIONADO) {
    if (
        valor1 === NUMERO_SELECIONADO ||
        valor2 === NUMERO_SELECIONADO ||
        NUMERO_SELECIONADO === 0
    ) {
        console.log(`O numero ${NUMERO_SELECIONADO} esta na sequencia de Fibonacci`);
        break;
    }

    guardarValor = valor1;
    valor1 = valor2;
    valor2 += guardarValor;
}
