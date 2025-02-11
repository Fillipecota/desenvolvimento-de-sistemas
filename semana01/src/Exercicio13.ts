import leia from "readline-sync"
export default function Exercicio13(){
    
var criente1 = leia.question("Digite seu nome: ")
var valor1 = leia. questionFloat("Digite o valor da compra: ")
var criente2 = leia.question("Digite o seu nome: ")
var valor2 = leia.questionFloat("Digite o valor da compra: ")

console.log (`Valor total pago foiR$ ${valor1 + valor2} `)
console.log(` A media das compra foi ${ (valor1+valor2)/2}`)

if (valor1 > 20){
    console.log(`${ criente1} fez a compra no valor R$ ${ valor1} `)
}
if ( valor2 > 20 ){
    console.log(`${criente2} fez a compra no valor R$ ${valor2}`)
}
}