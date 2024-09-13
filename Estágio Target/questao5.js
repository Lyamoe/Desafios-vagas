/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

const ENTRADA = prompt("Insira um texto para inverter: ");
let CONTRARIO = "";

if (ENTRADA.length) {
    for (
        let tamanhoDaPalavra = ENTRADA.length;
        tamanhoDaPalavra > 0;
        tamanhoDaPalavra--
    ) {
        CONTRARIO += ENTRADA.charAt(tamanhoDaPalavra - 1);
    }
}

console.log(`A palavra ao contrario e ${CONTRARIO}`)