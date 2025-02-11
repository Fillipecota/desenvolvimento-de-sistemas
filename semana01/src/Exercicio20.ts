import leia from "readline-sync"
export default function Exercicio20() {

    let numeroDigitado = leia.questionInt("INFORME O NUMERO DE PARTIDA: ")


    for (let i = numeroDigitado; i >= 0; i--) {
        console.log(i);
    }


}