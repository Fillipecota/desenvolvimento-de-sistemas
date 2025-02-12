import leia from "readline-sync"
export default function Exercicio23() {

    var xerox = 0.33
    var copia = 1

    for (let i = 0; i < 500; i++) {
        var calculo = copia * xerox
        console.log(`${copia} custa R$ ${calculo.toFixed(2)} `)
        copia++
    }

}