
const suit = ["Sigma", "Alpha", "Jittleyang ", "Futuluhtoogan"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

let playersMoney = 10;
let dealersTotal = 0;
let playersTotal = 0;
let dealersDeck = ""
let playersDeck = ""

function startGame(){
    document.querySelector('.game-window').style.display = 'block';
    document.querySelector('.play-button').style.display = 'none';
    document.getElementById('players-money').innerText = playersMoney;
    document.getElementById('dealers-hand').innerText = dealersDeck;
    document.getElementById('dealers-total').innerText = dealersTotal;
    document.getElementById('players-hand').innerText = playersDeck;
    document.getElementById('players-total').innerText = playersTotal;
}

function hit(){
    dealersHand()
    playersHand()
    document.getElementById('dealers-hand').innerText = dealersDeck;
    document.getElementById('dealers-total').innerText = dealersTotal;

    document.getElementById('players-hand').innerText = playersDeck;
    document.getElementById('players-total').innerText = playersTotal;


}
function dealersHand(){
    let randomSuit = Math.floor(Math.random()*3) // number 0-4
    let randomRank = Math.floor(Math.random()*12)
    let cardD = suit[randomSuit]+ rank[randomRank];
    dealersDeck += cardD + ", ";
    if (typeof rank[randomRank] === 'string') {
        // Convert face cards to their respective values
        switch (rank[randomRank]) {
            case 'J':
            case 'Q':
            case 'K':
                dealersTotal += 10;
                break;
            case 'A':
                dealersTotal += 11; // Or handle Ace as 1 or 11 depending on your game rules
                break;
        }
    } else {
        dealersTotal += rank[randomRank];
    }

}

function playersHand(){
    let randomSuit = Math.floor(Math.random()*3) // number 0-4
    let randomRank = Math.floor(Math.random()*12)
    let cardP = suit[randomSuit]+ rank[randomRank];
    playersDeck += cardP + ", "
    if (typeof rank[randomRank] === 'string') {
        // Convert face cards to their respective values
        switch (rank[randomRank]) {
            case 'J':
            case 'Q':
            case 'K':
                playersTotal += 10;
                break;
            case 'A':
                playersTotal += 11; // Or handle Ace as 1 or 11 depending on your game rules
                break;
        }
    } else {
        playersTotal += rank[randomRank];
    }
}

function deckAdding(){

}