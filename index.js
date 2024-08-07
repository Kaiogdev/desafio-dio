let expDoHeroi = 9000;
let nomeDoHeroi = "Felipão"
let eloDoHeroi;

if (expDoHeroi < 1000) {
    eloDoHeroi = "Ferro";
} 
else if (expDoHeroi > 1000 && expDoHeroi <= 2000) {
    eloDoHeroi = "Bronze";
}
 else if (expDoHeroi > 2000 && expDoHeroi <= 5000) {
    eloDoHeroi = "Prata";
}
 else if (expDoHeroi > 5000 && expDoHeroi <= 7000) {
    eloDoHeroi = "Ouro";
}
 else if (expDoHeroi > 7000 && expDoHeroi <= 8000) {
    eloDoHeroi = "Platina";
}
 else if (expDoHeroi > 8000 && expDoHeroi <= 9000) {
    eloDoHeroi = "Ascendente";
} 
else if (expDoHeroi > 9000 && expDoHeroi <= 10000) {
    eloDoHeroi = "Imortal";
}
 else if (expDoHeroi > 10000) {
    eloDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de: " + eloDoHeroi)












