import leia from "readline-sync"
export default function Exercicio05() {

    var Celsius = leia.questionFloat("DIGITA A TEMPERATURA EM Celsius:  ")

    var opcao = leia.keyInSelect(["Fahrenheit", " Kelvin"]) + 1

    switch (opcao) {
        case 1:
            var F = Celsius * 1.8 + 32;
            console.log(F + "°F")
            break;

        case 2:
            var K = Celsius + 273;
            console.log(K + "°K")
            break;
    }
}