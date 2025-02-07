import leia from "readline-sync"
export default function Exercicio11() {

    var placa = leia.question('DIGITE  O NUMERO DA PLACA: ')
    var ultimoDigito = placa[placa.length - 1]

    if (ultimoDigito === "0" || ultimoDigito === "1") {
        console.log(`não pode rodar na segunda-feira`)
    } else if (ultimoDigito === "2" || ultimoDigito === "3") {
        console.log(`não pode rodar na terça-feira`)
    } else if (ultimoDigito === "4" || ultimoDigito === "5") {
        console.log(`não pode rodar na quarta-feira`)
    } else if (ultimoDigito === "6" || ultimoDigito === "7") {
        console.log(`não pode rodar na quinta-feira`)
    } else {
        console.log(`não pode rodar na sexta-feira`)
    }

}