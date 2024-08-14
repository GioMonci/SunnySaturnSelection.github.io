
let gameState = {
    suit: ["Clubs ", "Diamonds ", "Hearts ", "Spades "],
    rank: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    playersMoney: 10,
    dealersTotal: 0,
    playersTotal: 0,
    dealersDeck: "",
    playersDeck: ""
}

function startGame(){
    document.querySelector('.game-window').style.display = 'block';
    document.querySelector('.play-button').style.display = 'none';
    upDateUI()
}

function hit(){
    dealersHand()
    playersHand()
    totalingCards()
    upDateUI()
}

function dealersHand(){
    let randomSuit = Math.floor(Math.random()*3) // number 0-4
    let randomRank = Math.floor(Math.random()*12)
    let cardD = gameState.suit[randomSuit]+ gameState.rank[randomRank];
    gameState.dealersDeck += cardD + ", ";
    if (typeof gameState.rank[randomRank] === 'string') {
        // Convert face cards to their respective values
        switch (gameState.rank[randomRank]) {
            case 'J':
            case 'Q':
            case 'K':
                gameState.dealersTotal += 10;
                break;
            case 'A':
                gameState.dealersTotal += 11;
                break;
        }
    } else {
        gameState.dealersTotal += gameState.rank[randomRank];
    }
}

function playersHand(){
    let randomSuit = Math.floor(Math.random()*3) // number 0-4
    let randomRank = Math.floor(Math.random()*12)
    let cardP = gameState.suit[randomSuit]+ gameState.rank[randomRank];
    gameState.playersDeck += cardP + ", "
    if (typeof gameState.rank[randomRank] === 'string') {
        // Convert face cards to their respective values
        switch (gameState.rank[randomRank]) {
            case 'J':
            case 'Q':
            case 'K':
                gameState.playersTotal += 10;
                break;
            case 'A':
                gameState.playersTotal += 11;
                break;
        }
    } else {
        gameState.playersTotal += gameState.rank[randomRank];
    }
}

function totalingCards() {
    if (gameState.dealersTotal === 21 && gameState.playersTotal === 21) {
        endGame();
        setTimeout(alerts,1000)
    }
    else if(gameState.dealersTotal > 21 && gameState.playersTotal > 21){
        endGame();
        setTimeout(alerts,1000)
    }else if (gameState.dealersTotal === 21) {
        endGame();
        setTimeout(alerts,1000)
    } else if (gameState.playersTotal === 21) {
        endGame();
        setTimeout(alerts,1000)
    } else if (gameState.dealersTotal > 21) {
        endGame();
        setTimeout(alerts,1000)
    } else if (gameState.playersTotal > 21) {
        endGame();
        setTimeout(alerts,1000)
    } else {
        upDateUI();
    }
}

function alerts(){
    if (gameState.dealersTotal === 21 && gameState.playersTotal === 21) {
        alert("It's a draw!");
    } else if(gameState.dealersTotal > 21 && gameState.playersTotal > 21){
       alert("Both player and dealer busts")
    } else if (gameState.dealersTotal === 21) {
        alert("Dealer has 21! Dealer wins!");
    } else if (gameState.playersTotal === 21) {
        alert("Player has 21! Player wins!");
    } else if (gameState.dealersTotal > 21) {
        alert("Dealer busts! Player wins!");
    } else if (gameState.playersTotal > 21) {
        alert("Player busts! Dealer wins!");
    }
}

function stand(){
    while (gameState.dealersTotal < 17) { // Example dealer rule: draw until 17 or higher
        dealersHand();
    }
    upDateUI();
    totalingCards();
}
function upDateUI(){
    document.getElementById('players-money').innerText = gameState.playersMoney;
    document.getElementById('dealers-hand').innerText = gameState.dealersDeck;
    document.getElementById('dealers-total').innerText = gameState.dealersTotal;
    document.getElementById('players-hand').innerText = gameState.playersDeck;
    document.getElementById('players-total').innerText = gameState.playersTotal;
}

function endGame(){
    upDateUI();
    document.querySelector('#restartBtn').style.display = 'inline';

}

function gameRestart(){
    gameState.dealersTotal = 0;
    gameState.playersTotal = 0;
    gameState.dealersDeck = "";
    gameState.playersDeck = "";
    document.querySelector('.game-window').style.display = 'none';
    document.querySelector('.play-button').style.display = 'block';
    document.querySelector('#restartBtn').style.display = 'none';
    upDateUI();
}

function bet(){
}

function doubledown(){
}

function winMoney(){

}

function loseMoney(){

}