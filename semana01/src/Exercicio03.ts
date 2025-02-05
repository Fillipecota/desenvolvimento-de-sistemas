import leia from 'readline-sync'
export default function Exercicio03() {

    var idade = leia.questionInt("QUANTOS IDADE: ")
    var meses = leia.questionInt("QUANTOS MESES: ")
    var dias = leia.questionInt("QUANTOS DIAS: ")
    var diasDeIdade = (idade * 365) + (meses * 30) + dias;

    console.log(diasDeIdade + " Dias")
}