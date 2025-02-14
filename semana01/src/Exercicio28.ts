import leia from "readline-sync"
export default function Exercicio28() {

    var valentina = 1.50
    var joaozinho = 1.40
    var anos = 0

    while (valentina >= joaozinho) {
        valentina += 0.02;
        joaozinho += 0.03;
        anos++;
    }
    console.log(`LEVARA ${anos} ANOS`)
}