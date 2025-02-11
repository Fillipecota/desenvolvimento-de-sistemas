import leia from "readline-sync"
export default function Exercicio18() {

    var nome = leia.question("DIGITE O NOME DO FUNCIONARIO: ")
    var salario = leia.questionFloat(" DIGITE O SALARIO FIXO: ")
    var qtdepedente = leia.keyInSelect(["0 dependetes", "1 depedentes", "2 depedente", "3 depedente", "4 ou mais depedente"]) + 1

    switch (qtdepedente) {
        case 1:
            console.log(`SALARIO ${nome} É R$: ${salario + (salario * 0.02)}`)
            break;
        case 2:
            console.log(`SALARIO ${nome} È R$: ${salario + (salario * 0.05)}`)
            break;
        case 3:
            console.log(`SALARIO ${nome} É R$: ${salario + (salario * 0.07)}`)
            break;
        case 4:
            console.log(`SALARIO ${nome} É R$: ${salario + (salario * 0.10)}`)
            break;
        case 5:
            console.log(`SALARIO ${nome} É R$: ${salario + (salario * 0.15)}`)
            break;
    }

}