let nomeHeroi = "João Pedro";
let xpHeroi = 10001;
let rankHeroi = "";

if(xpHeroi <= 1000){
    rankHeroi = "Ferro";
}else if(xpHeroi > 1000 && xpHeroi <= 2000){
    rankHeroi = "Bronze";
}else if(xpHeroi > 2000 && xpHeroi <= 5000){
    rankHeroi = "Prata";
}else if(xpHeroi > 5000 && xpHeroi <= 7000){
    rankHeroi = "Ouro";
}else if(xpHeroi > 7000 && xpHeroi <= 8000){
    rankHeroi = "Platina";
}else if(xpHeroi > 8000 && xpHeroi <= 9000){
    rankHeroi = "Ascendente";
}else if(xpHeroi > 9000 && xpHeroi <= 10000){
    rankHeroi = "Imortal";
}else {
    rankHeroi = "Radiante";
}

console.log(`O Héroi de nome: ${nomeHeroi}, está no rank: ${rankHeroi}.`)