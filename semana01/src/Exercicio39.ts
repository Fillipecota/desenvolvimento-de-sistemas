import leia from "readline-sync"
export default function Exercicio39() {

    let numero: number[] = []
    let invertido: number[] = []

    for (let i = 0; i < 15; i++) {
        numero[i] = Math.trunc(Math.random() * 100);
    }
    for (let i = numero.length - 1; i >= 0; i--) {
        invertido.push(numero[i])
    }

    console.log(numero)
    console.log(invertido)
}