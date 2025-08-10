// list of splashes you want to rotate
const splashes = [
    'OW2 S17 😭'
];

let idx = 0;
const splashEl = document.getElementById('splash');

function nextSplash() {
    // update text
    splashEl.textContent = splashes[idx];
    // trigger bounce
    splashEl.classList.add('bounce');
    // remove class so it can re-trigger next time
    setTimeout(() => splashEl.classList.remove('bounce'), 600);

    idx = (idx + 1) % splashes.length;
}

// first show
nextSplash();
// then every 3 seconds
setInterval(nextSplash, 3000);
