import leia from "readline-sync"
export default function Exercicio09(){

    var senha = leia.questionInt('DIGITE A SENHA: ')

    if ( senha == 1234){
        console.log("ACESSO PERMITIDO")
        return
    }
    console.log("ACESSO NEGADO")
}