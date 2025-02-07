import leia from 'readline-sync'
export default function Exercicio04() {

    var nulo = leia.questionInt("DIGITE O QUANTIDADE DE VOTOS NULO: ")
    var branco = leia.questionInt("DIGITE O QUANTIDADE DE VOTOS BRANCO: ")
    // var validados = leia.questionInt("DIGITE A QUANTIDADE DE VOTOS VALIDOS: ")
    var toalVotos = leia.questionInt("DIGITE O NUMERO DE ELEITORES: ")

    var validos = toalVotos -(branco+ nulo)
    var porcentagemBranco = (branco/toalVotos)*100
    var porcentagemNulo = (nulo/toalVotos)*100
    var porcentagemValido = (validos/toalVotos)*100 
   

    console.log(`TOTAL VOTOS: ${toalVotos.toFixed(1)}%`)
    console.log (`TOTAL VOTOS BRANCOS: ${porcentagemBranco.toFixed(0)}%`)
    console.log (`TOTAL VOTOS NULOS: ${porcentagemNulo.toFixed(0)}%`)
    console.log (`TOTAL VOTOS VALIDOS: ${porcentagemValido.toFixed(0)}%`)

}