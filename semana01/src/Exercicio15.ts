import leia from "readline-sync"
export default function Exercicio15(){

    var prduto = leia.questionFloat("QUAL VALOR DO PRODUTO: ") 
    
    let moeda1 = leia.questionInt("Digite a quantidade de moeda de 1 reais: ")
    let moeda05 = leia.questionFloat("Digite a quantidade de moeda de 0.5 centavos: ")
    let moeda10 = leia.questionFloat("Digite a quantidade de moeda de 10 centavos: ")
    let moeda25 = leia.questionFloat("Digite a quantidade de moeda de 25 centavos: ")
    let moeda50 = leia.questionFloat("Digite a quantidade de moeda de 50 centavos: ")
    
    var valortotal = ( moeda1 * 1) + (moeda05 * 0.05) + (moeda10 * 0.10)+ (moeda25 * 0.25) + (moeda50 * 0.50)

    console.log(`o valor do produto é R$: ${prduto}`)
    console.log(`o valor quardado é R$: ${valortotal}`)

    if(prduto <= valortotal){
        console.log(` voce ja tem dinheiro pra comprar`)
    }

}