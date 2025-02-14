import leia from "readline-sync"
export default function Exercicio36() {

    let vetorSoma = 0;
    let numero: number[] = []

    for (let i = 0; i < 5; i++) {
        numero.push(leia.questionInt(`DIGITE UM NUMERO :`))

    }

    numero.forEach((numero) => {
        vetorSoma += numero;
    })

    console.table(numero)
    console.log(vetorSoma)
}