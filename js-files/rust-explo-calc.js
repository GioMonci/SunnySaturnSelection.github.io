function rustcalculate() {
    const explosive = document.getElementById('explosive-select').value;
    const gunpowder = parseInt(document.getElementById('gunpowder-amount').value);

    if (isNaN(gunpowder) || gunpowder <= 0) {
        alert('Please enter a valid amount of gunpowder.');
        return;
    }

    const gunpowderRequirements = {
        'satchel': 240,     // Amount of gunpowder required for 1 Satchel
        'c4': 1000,         // Amount of gunpowder required for 1 C4
        'rocket': 650,     // Amount of gunpowder required for 1 Rocket
        'explo-ammo': 20    // Amount of gunpowder required for 1 Explosive Ammo
    };

    const requiredGunpowder = gunpowderRequirements[explosive];
    const amountCanMake = Math.floor(gunpowder / requiredGunpowder);

    if (explosive === "satchel") {
        alert(`With ${gunpowder} gunpowder, you can make approximately ${amountCanMake} ${explosive}(s).`);
    }else{
        const sulferRequirments = {
            'explo-ammo':10* amountCanMake,
            'c4': 10 * amountCanMake,
            'rocket': 10 * amountCanMake
        }
        const requiredSulfur = sulferRequirments[explosive];
        alert(`With ${gunpowder} gunpowder, you can make approximately ${amountCanMake} ${explosive}(s).\n` +
            `Additionally, you will need ${requiredSulfur} sulfur to make the required explosives.`);
    }
}