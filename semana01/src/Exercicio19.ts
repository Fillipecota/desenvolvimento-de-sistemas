import leia from "readline-sync"
export default function Exercicio19() {

    let numeroDigitado = leia.questionInt("INFORME O NUMERO FINAL: ")


    for (let i = 0; i <= numeroDigitado; i++) {
        console.log(i);
    }

}