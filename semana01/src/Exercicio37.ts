import leia from "readline-sync"
export default function Exercicio37() {

    let numero: number[] = []

    for (let i = 0; i < 10; i++) {
        numero[i] = Math.trunc(Math.random() * 100);
    }

    let pares = numero.filter((numero) => numero % 2 === 0);

    console.log(numero)
    console.log(pares)
}