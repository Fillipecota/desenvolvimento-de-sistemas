import leia from "readline-sync"
export default function Exercicio08() {

    var doacao = 0
    var opcao = leia.keyInSelect(['10', '25', '50', 'OUTRO VALOR']) + 1

    switch (opcao) {
        case 1:
            doacao += 10
            console.log(`OBRIGADO VOCE CONTRIBUIU COM 10 REAIS`)
            break;

        case 2:
            doacao += 25
            console.log(`OBRIGADO VOCE CONTRIBUIU COM 25 REAIS`)
            break;

        case 3:
            doacao = + 50
            console.log(`OBRIGADO VOCE CONTRIBUIU COM 50 REAIS`)
            break;

        case 4:
            var valor = leia.questionFloat("DIGITE O VALOR DA DOAÇÃO: ")
            doacao += valor
            console.log(`OBRIGADO VOCE CONTRIBUIU COM ${valor} REAIS`)
    }
    console.log(doacao)
}