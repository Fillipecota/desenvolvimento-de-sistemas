import leia from "readline-sync"
export default function Exercicio35() {

    let vetorNumros = [];
    let multiplicacao = [];

    for (let i = 0; i < 10; i++) {
        vetorNumros.push(leia.questionInt(`DIGITE UM NUMERO ${i + 1} : `))
    }

    let j = 0;
    while (j < vetorNumros.length) {
        multiplicacao[j] = vetorNumros[j] * 5;
        j++
    }

    console.table(vetorNumros)
    console.table(multiplicacao)
}