import leia from "readline-sync"
export default function Exercicio40() {

    let max: number[] = []
    let min: number[] = []
    for (let i = 0; i < 30; i++) {
        let valorA = Math.trunc(Math.random() * 23) + 12
        let valorB = Math.trunc(Math.random() * 23) + 12

        max.push((valorA > valorB) ? valorA : valorB)
        min.push((valorA < valorB) ? valorA : valorB)

    }
    console.table(max)
    console.table(min)
}