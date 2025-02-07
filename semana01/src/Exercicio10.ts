import leia from "readline-sync"
export default function Exercicio10(){

    var numero = leia. questionInt(`DIGITE UM NUMERO: `)

    if( numero % 2 == 0){
        console.log(` O NUMERO É PAR`)
        return
    }
    console.log ( `O NUMERO É IMPAR`)
}