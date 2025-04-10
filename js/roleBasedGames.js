
function getRoles(){
    let gameSelect = document.getElementById("game");
    let roleSelect = document.getElementById("roles")

    roleSelect.innerHTML = '<option value="">Choose A Role</option>';

    switch(gameSelect.value){
        case "Overwatch":
            addOption(roleSelect, "Tank", "tank");
            addOption(roleSelect, "DPS", "dps");
            addOption(roleSelect, "Support", "support");
            addOption(roleSelect, "All-Roles", "all-roles");
            addOption(roleSelect, "SPENSOR", "spensor");
            break;
        //case "Rainbow":
            //addOption(roleSelect, "Attack", "attack");
            //addOption(roleSelect, "Defense", "defense")
            break;
        //case "Rivals":
            //addOption(roleSelect, "Vanguard", "vanguard");
            //addOption(roleSelect, "Duelist", "duelist");
            //addOption(roleSelect, "Strategist", "strategist");
            //addOption(roleSelect, "All-Roles", "all-roles");
            break;
            // add more later
        default:
            break;
    }
}

function addOption(selectElement, text, value){
    let option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectElement.add(option)
}

function selectRandomCharacter(){

    let gameSelect = document.getElementById("game").value;
    let roleSelect = document.getElementById("roles").value;

    if (gameSelect === '' || roleSelect === ''){
        alert("Please Select both a game and role")
        return;
    }

    let character;
    switch (gameSelect){
        case "Overwatch":
            character = getRandomCharacterOverwatch(roleSelect);
            break;
        case "Rainbow":
            character = getRandomCharacterRainbow(roleSelect);
            break;
        case "Rivals":
            character = getRandomCharacterRivals(roleSelect);
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
function getRandomCharacterOverwatch(role) {
    let tanks = ["Reinhardt", "Winston", "D.Va", "Roadhog", "Orisa", "Sigma", "Wrecking Ball", "Zarya","DoomFist", "JunkerQueen", "Ramattra", "Mauga", "Hazard"];
    let support = ["Ana", "Baptiste", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta", "Illari", "Kiriko", "LifeWeaver", "Juno"];
    let dps = ["Genji", "Cassidy", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjörn", 
        "Widowmaker", "Symmetra","Venture", "Ashe", "Echo", "Sojourn"];
    let allroles = ["Genji", "Cassidy", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Hanzo", 
        "Junkrat", "Mei", "Torbjörn", "Widowmaker", "Symmetra","Venture", "Ashe", "Echo", "Sojourn", "Reinhardt", 
        "Winston", "D.Va", "Roadhog", "Orisa", "Sigma", "Wrecking Ball", "Zarya","DoomFist", "JunkerQueen", "Ramattra", 
        "Mauga","Ana", "Baptiste", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta", "Illari", "Kiriko", "LifeWeaver", 
        "Juno", "Hazard"];
    let spensor = ["Reinhardt", "Winston", "D.Va", "JunkerQueen", "Ramattra",
        "Ana", "Baptiste", "Brigitte", "Zenyatta", "Illari", "Kiriko", "Juno",
        "Genji", "Cassidy", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Mei","Venture", "Echo", "Sojourn"
    ]

    switch (role) {
        case "tank":
            return getRandomFromArray(tanks);
        case "support":
            return getRandomFromArray(support);
        case "dps":
            return getRandomFromArray(dps);
        case "all-roles":
            return getRandomFromArray(allroles);
        case "spensor":
            return getRandomFromArray(spensor)
        default:
            return null;
    }
}

function getRandomCharacterRainbow(role) {
    let attackers = ["Striker","Deimos", "Ram", "Brava", "Grim", "Sens", "Osa", "Flores", "Zero", "Ace", "Iana", "Kali", "Amaru", "Nøkk", "Gridlock", "Nomad", "Maverick", "Lion", "Finka", "Dokkaebi", "Zofia", "Ying", "Jackal", "Hibana", "Capitão", "Blackbeard", "Buck", "Sledge", "Thatcher", "Ash", "Thermite", "Montagne", "Twitch", "Blitz", "Iq", "Fuze", "Glaz"];
    let defenders = ["Sentry","Tubarão", "Fenrir", "Solis", "Azami", "Thorn", "Thunderbird", "Aruni", "Melusi", "Oryx", "Wamai", "Goyo", "Warden", "Mozzie", "Kaid", "Clash", "Maestro", "Alibi", "Vigil", "Ela", "Lesion", "Mira", "Echo", "Caveira", "Valkyrie", "Frost", "Mute", "Smoke", "Castle", "Pulse", "Doc", "Rook", "Jäger", "Bandit", "Tachanka", "Kapkan"];

    switch (role) {
        case "attack":
            return getRandomFromArray(attackers);
        case "defense":
            return getRandomFromArray(defenders);
        default:
            return null;
    }
}

function getRandomCharacterRivals(role){
    let vanguard = ["Captain America", "Doctor Strange", "Groot", "Bruce Banner (Hulk)", "Peni Parker", "Magneto", "Thor", "Venom"];
    let duelist = ["Black Panther", "Black Widow", "Hawkeye", "Hela", "Iron Fist", "Iron Man", "Magik", "Moon Knight", "Namor", "Psylocke", "Scarlet Witch", "Spider-Man", "Squirrel Girl", "Star-Lord", "Storm", "The Punisher", "Winter Soldier", "Wolverine"];
    let strategist = ["Adam Warlock", "Cloak and Dagger", "Jeff the Land Shark", "Loki", "Luna Snow", "Mantis", "Rocket Raccoon"];
    let allroles2 = ["Captain America", "Doctor Strange", "Groot", "Hulk", "Peni Parker", "Magneto", "Thor", "Venom", "Black Panther", "Black Widow", "Hawkeye", "Hela", "Iron Fist", "Iron Man", "Magik", "Moon Knight", "Namor", "Psylocke", "Scarlet Witch", "Spider-Man", "Squirrel Girl", "Star-Lord", "Storm", "The Punisher", "Winter Soldier", "Wolverine", "Adam Warlock", "Cloak and Dagger", "Jeff the Land Shark", "Loki", "Luna Snow", "Mantis", "Rocket Raccoon"]
    switch (role) {
        case "vanguard":
            return getRandomFromArray(vanguard);
        case "duelist":
            return getRandomFromArray(duelist);
        case "strategist":
            return getRandomFromArray(strategist);
        case "all-roles":
            return getRandomFromArray(allroles2);
        default:
            return null;
    }
}
function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}