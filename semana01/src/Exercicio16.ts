import leia from "readline-sync"
export default function Exercicio16() {

    let idade = leia.questionInt("Digite sua idade: ")
    var nome 

    if (idade >= 18) {
         nome = leia.question("Digite seu nome completo: ")
    }else{
        console.log("Para continuar é preciso de permissao dos pais")
        var permissao = leia.keyInSelect(["sim", "não"])
       
        switch (permissao) {
            case 1:
                nome = leia.question("Digite seu nome completo: ")
                break;
            case 2:
                console.log(`sem premissao de viajem `)
                break;
        }
    }

}