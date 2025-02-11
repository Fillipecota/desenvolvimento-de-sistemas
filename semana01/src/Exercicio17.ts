import leia from "readline-sync"
export default function Exercicio17() {

    var time1 = leia.question("Digite o nome do time: ")
    var qtgols = leia.questionInt("Digite a quantidades de gol feita na partida: ")
    var time2 = leia.question("Digite o nome do time: ")
    var qtgols2 = leia.questionInt("Digite a quantidade de gol feia na partida: ")

    if (qtgols == qtgols2) {
        console.log(` ${time1} e ${time2} tiveram empate`)
    } else if (qtgols > qtgols2) {
        var pgeral = qtgols - qtgols2
        if (pgeral >= 1 && pgeral <= 3) {
            console.log(`partida normal entre ${time1} e ${time2}`)
        }
    } else if (qtgols2 > qtgols) {
        var pgeral = qtgols2 - qtgols
        if (pgeral >= 1 && pgeral <= 3) {
            console.log(`partida normal entre ${time1} e ${time2}`)
        }
    } else
        console.log(" o jogo foi de goleada")
}