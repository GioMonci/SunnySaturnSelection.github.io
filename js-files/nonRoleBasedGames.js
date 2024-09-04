function selectRandomCharacter2(){

    let gameSelect = document.getElementById("other-game").value;

    if (gameSelect === ''){
        alert("Please Select a game")
        return;
    }

    let character;
    switch (gameSelect){
        case "val":
            character = getRandomCharacterVal();
            break;
        case "rorr":
            character = getRandomCharacterRORR();
            break;
        case "ror2":
            character = getRandomCharacterROR2();
            break;
        case "gfrb":
            character = getRandomCharacterGFRB();
            break;
        case "ggst":
            character = getRandomCharacterGGST();
            break;
        default:
            alert("Unsupported Game")
            return;
    }

    if(character){
        alert("Your randomly selected character is: " + character);
    }
    else{
        alert("No characters available for selected game and role")
    }
}
function getRandomCharacterVal(){
    let characters = ["Brimstone", "Phoenix", "Sage", "Sova", "Viper", "Cypher", "Reyna", "Killjoy", "Breach", "Omen", "Jett", "Raze", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko", "Deadlock", "Iso", "Clove", "Vyse"];

    return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomCharacterRORR() {
    let characters = ["Commando", "Huntress", "Enforcer", "Bandit", "HAN-D", "Engineer", "Miner", "Sniper", "Acrid", "Mercenary", "Loader", "CHEF", "Pilot", "Artificer", "Drifter"];


    return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomCharacterROR2() {

    let characters = ["Commando", "Huntress", "Bandit", "MUL-T", "Engineer", "Artificer", "Mercenary", "Rex", "Loader", "Acrid", "Captain","Rail Gunner", "Void Fiend"];

    return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomCharacterGFRB() {

    let characters = ["AoBai", "CrownPrince", "LeiLuo", "Li", "Nona", "QianSui", "QingYan", "Tao", "XingZhe", "ZiXiao"];

    return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomCharacterGGST() {

    let characters = ["SOL", "KY", "MAY", "AXL", "CHIPP", "POTEMKIN", "FAUST", "MILLIA", "ZATO", "RAMLETHAL", "LEO", "NAGORIYUKI", "GIOVANNA", "ANJI", "I-NO", "GOLDLEWIS", "Jack-O'", "HAPPYCHAOS", "BAIKEN", "TESTAMENT", "BRIDGET", "SIN", "BEDMAN?", "ASUKAR♯", "JOHNNY", "ELPHELT", "A.B.A", "SLAYER"];

    return characters[Math.floor(Math.random() * characters.length)];
}
