import leia from "readline-sync"
import Exercicio01 from "./Exercicio01";
import Exercicio02 from "./Exercicio02";
import Exercicio03 from "./Exercicio03";
import Exercicio04 from "./Exercicio04";
import Exercicio05 from "./Exercicio05";
import Exercicio06 from "./Exercicio06";
import Exercicio07 from "./Exercicio07";
import Exercicio08 from "./Exercicio08";
import Exercicio09 from "./Exercicio09";
import Exercicio10 from "./Exercicio10";
import Exercicio11 from "./Exercicio11";
import Exercicio12 from "./Exercicio12";
import Exercicio13 from "./Exercicio13";


var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 03", "Exercicio 04", "Exercicio 05", "Exercicio 06", "Exercicio 07", "Exercicio 08", "Exercicio 09", "Exercicio 10", "Exercicio 11", "Exercicio 12","Exercicio 13"]) + 1;
switch (opcao) {
    case 1:
        Exercicio01()
        break;
    case 2:
        Exercicio02()
        break;
    case 3:
        Exercicio03()
        break;
    case 4:
        Exercicio04()
        break;
    case 5:
        Exercicio05()
        break;
    case 6:
        Exercicio06()
        break;
    case 7:
        Exercicio07()
        break;
    case 8:
        Exercicio08()
        break;
    case 9:
        Exercicio09()
        break;
    case 10:
        Exercicio10()
        break;
    case 11:
        Exercicio11()
        break;
    case 12:
        Exercicio12()
        break;
    case 13:
        Exercicio13()
        break;
}




// var nome = leia.question("DIGITE O SEU NOME:  ");

// var saida =  "Olá  " + nome;

// console.log (saida)


// var x=(8-3*5/3+3*2) %2

// console.log(x)

// let z = 10
// z += 25-5

// console.log (z)

// var media = (7+8+9)/3

// console.log(media)

// let x = (2 + 3 * (4 / 2) + (2 * 4)) % 2
// let w = 1.5 + 4 / 2 * 3 - 7
// let y = Math.trunc(x)
// let z = Math.trunc(w)

// if ((x !== w) && (y === z)) {
//     console.log('true')
// } else {
//     console.log("false")
// }
