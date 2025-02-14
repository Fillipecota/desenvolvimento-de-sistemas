import leia from "readline-sync"
export default function Exercicio38() {

    let numero: number[] = []

    for (let i = 0; i < 15; i++) {
        numero[i] = Math.trunc(Math.random() * 100);
    }

    let maiores = numero.filter((numero) => numero >= 10);

    console.log(numero)
    console.log(maiores)
}