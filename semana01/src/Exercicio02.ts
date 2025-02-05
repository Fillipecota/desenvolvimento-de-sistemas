import leia from 'readline-sync'
export default function Exercicio02() {

var largura = leia.questionFloat("DIGITE A LARGURA: ")
var altura = leia.questionFloat("DIGITE A ALTURA:  ")

var area = largura * altura

console.log(area)
}