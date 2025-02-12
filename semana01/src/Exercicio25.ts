import leia from "readline-sync"
export default function Exercicio25() {

    console.log("oi")

    for (let i = 10; i <= 1000; i++) {

        if (i < 501 || i > 899) {
            console.log(i)
        }
    }
}