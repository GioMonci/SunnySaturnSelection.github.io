
let gameState = {
    suit: ["Sigma", "Alpha", "Jittleyang ", "Futuluhtoogan"],
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

function upDateUI(){
    document.getElementById('players-money').innerText = gameState.playersMoney;
    document.getElementById('dealers-hand').innerText = gameState.dealersDeck;
    document.getElementById('dealers-total').innerText = gameState.dealersTotal;
    document.getElementById('players-hand').innerText = gameState.playersDeck;
    document.getElementById('players-total').innerText = gameState.playersTotal;
}
