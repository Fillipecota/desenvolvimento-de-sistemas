import leia from "readline-sync"
export default function Exercicio22() {

    let numeroMaior = 0
    let numeroMenor = 0

    for (var i = 0; i < 15; i++) {
        var numero = leia.questionInt("Digite um numero: ")
        if (i === 0) {
            numeroMaior += numero
            numeroMenor += numero
        }
        if (numero < numeroMenor) {
            numeroMenor += numero
        }
        if (numero > numeroMaior) {
            numeroMaior += numero
        }
    }
    console.log(`NUMERO MAIOR É ${numeroMaior}`)
    console.log(`NUMERO MENOR É ${numeroMenor}`)
}