/* Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"  */

let nomeHeroi = "inux"
let quantExp = 7500
let nivel = ""


if (quantExp <= 1000) {
  nivel = "Ferro"
} 
else if (quantExp <=2000 ) {
    nivel = "Bronze"
}
else if (quantExp <=5000 ) {
    nivel = "Prata"
}
else if (quantExp <=7000 ) {
    nivel = "Ouro"
}
else if (quantExp <=8000 ) {
    nivel = "Platina"
}
else if (quantExp <=9000 ) {
    nivel = "Ascendente"
}
else if (quantExp <=10000 ) {
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

   console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)