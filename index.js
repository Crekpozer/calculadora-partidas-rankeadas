// Colinha :P

/* Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */

let vitorias = 500
let derrotas = 379
let nivel = ""
let saldoVitorias = 0

saldoVitorias = calcularSaldoVitorias(vitorias, derrotas)

if (saldoVitorias <= 10){
    nivel = "Ferro"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)

} else if (saldoVitorias >= 101){
    nivel = "Imortal"
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
} else {
    console.log("Valor inválido")
}

function calcularSaldoVitorias(totalVitorias, totalDerrotas){
    return totalVitorias - totalDerrotas
}