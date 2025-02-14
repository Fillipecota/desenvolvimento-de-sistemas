import leia from "readline-sync"
export default function Exercicio41() {

    let pai: number[] = []
    let mae: number[] = []
    let filho: number[] = []


    for (let i = 0; i < 50; i++) {
        pai[i] = Math.trunc(Math.random() * 100)
        mae[i] = Math.trunc(Math.random() * 100)
    }

    

     console.table(pai)
     console.table(mae)
     
}