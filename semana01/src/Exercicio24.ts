import leia from "readline-sync"
export default function Exercicio24() {

    var numero = leia.questionInt(" Digite o numero que deseja a taboada: ")

    for (let i = 1; i < 11; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}