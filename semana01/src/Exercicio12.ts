import leia from "readline-sync"
export default function Exercicio12() {

    var maca = leia.questionInt(`DIGITE O QUANTIDADE DE MACA: `)

    if (maca < 12) {
        var valor = maca * 0.30
        console.log(`IRA CUSTA ${valor}  por ${maca}`)
        return
    }
    var valor = maca * 0.25
    console.log(`IRA CUSTA ${valor}  por ${maca}`)

}