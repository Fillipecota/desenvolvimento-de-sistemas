import leia from "readline-sync"
export default function Exercicio06() {
    
    var valor = 0
    
    for (var i = 0; i < 5; i++) {
        var corrida = leia.questionFloat("Digite o valor da corrida: ")
        valor += corrida
    }
    
    var porcertagem =(valor * 0.25)
    var ganho = valor - porcertagem;

    console.log(`O MOTORISTA ARRECADO ${ganho}`)

}