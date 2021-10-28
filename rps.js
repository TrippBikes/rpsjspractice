let weps = ['rock', 'paper', 'scissors'];
let humWep = '';
let humPoints = 0;
let comPoints = 0;
let tiePoints = 0;
let games = 0;
let humScoreboard = document.querySelector('.humPoints');
let compScoreBoard = document.querySelector('.compPoints');
let tieScoreBoard = document.querySelector('.tiePoints');
let messageBoard = document.querySelector('.messageBoard');

function displayPoints(humPoints, comPoints, tiePoints) {
    let message = `HUMAN: ${humPoints} TIES: ${tiePoints} COMPUTER: ${comPoints}`;
    humScoreboard.textContent = `HUMAN: ${humPoints}`;
    compScoreBoard.textContent = `COMP: ${comPoints}`;
    tieScoreBoard.textContent = `TIES: ${tiePoints}`;
};

function displayResults(humWeapon, compWeapon, winner) {
    let result = ``;
    if (winner === 'tie') {
        result = `It's a tie!!`;
    } else if (winner === 'hum') {
        result = `Human Wins Round!`;
    } else {
        result = `Computer Wins Round!`;
    };
    let message = `Human selected ${humWeapon} and Computer selected ${compWeapon}!! ${result}!`;
    messageBoard.textContent = message;
};

function computerSelection() {
    const ran = Math.floor(Math.random() * weps.length);
    return weps[ran];
};

function getHumWep(e) {
    const humWeapon = e.target.id;
    const compWeapon = computerSelection();
    if (weps.includes(humWeapon)) {
        if (humWeapon === compWeapon) {
            tiePoints++;
            displayResults(humWeapon, compWeapon, 'tie')
            displayPoints(humPoints, comPoints, tiePoints)
        } else if (humWeapon === 'rock' && compWeapon === 'scissors' ||
            humWeapon === 'paper' && compWeapon === 'rock' ||
            humWeapon === 'scissors' && compWeapon === 'paper') {
            humPoints++;
            displayResults(humWeapon, compWeapon, 'hum')
            displayPoints(humPoints, comPoints, tiePoints);
        } else {
            comPoints++;
            displayResults(humWeapon, compWeapon, 'comp')
            displayPoints(humPoints, comPoints, tiePoints);
        };
    };
};
window.addEventListener('click', getHumWep);