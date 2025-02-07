import leia from "readline-sync"
export default function Exercicio07() {

    var produto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: ")

    if (produto < 20) {
        var porcertagem = (45 / 100)
        var valorVenda = produto + (porcertagem * produto)
        console.log(`O VALOR DA VENDA É: ${valorVenda}`)
    } else {
        var porcertagem = (35 / 100)
        var valorVenda = produto + (porcertagem * produto)
        console.log(`O VALOR DA VENDA É: ${valorVenda}`)
    }


}