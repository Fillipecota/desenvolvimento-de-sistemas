import leia from "readline-sync"
export default function Exercicio27() {

    let qtdNumero = 0
    let numeroDigitado;

    do {
        numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");
        if (numeroDigitado > 100 && numeroDigitado < 200) {
            qtdNumero++
        }
    } while (numeroDigitado !== 0);
    console.log(`NUMERO ENTRE 100 E 200 FORMA: ${qtdNumero}`)
}