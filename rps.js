let weps = ['rock', 'paper', 'scissors'];
let humWep = '';
let humPoints = 0;
let comPoints = 0;
let tiePoints = 0;
let games = 0;
let winner = 'no one'
let gameScoreBoard = document.querySelector('.gamePoints')
let humScoreboard = document.querySelector('.humPoints');
let compScoreBoard = document.querySelector('.compPoints');
let tieScoreBoard = document.querySelector('.tiePoints');
let messageBoard = document.querySelector('.messageBoard');
let restartGame = document.querySelector('.playAgain');
let thanksForPlaying = document.querySelector('.thanks')
let weaponBox = document.querySelector('.weapons');
let winnerMessage = document.querySelector('.winnerMessage');

function checkForWinner(){
    if (comPoints === 5) {
        weaponBox.classList.add('displayMeNot');
        restartGame.classList.remove('displayMeNot');
        winnerMessage.textContent = 'THE COMPUTER HAS BESTED YOU!! TOO BAD!!';
    } else if (humPoints === 5) {
        weaponBox.classList.add('displayMeNot');
        restartGame.classList.remove('displayMeNot');
        winnerMessage.textContent = 'CONGRATULATIONS!!! YOU WON!!!';
    };
};

function displayPoints(humPoints, comPoints, tiePoints, games) {
    humScoreboard.textContent = `HUMAN: ${humPoints}`;
    compScoreBoard.textContent = `COMP: ${comPoints}`;
    tieScoreBoard.textContent = `TIES: ${tiePoints}`;
    gameScoreBoard.textContent = `GAMES: ${games}`;
};

function displayResults(humWeapon, compWeapon, winner) {
    let result = ``;
    if (winner === 'tie') {
        result = `IT'S A TIE!!`;
    } else if (winner === 'hum') {
        result = `HUMAN WINS ROUND!`;
    } else {
        result = `COMPUTER WINS ROUND!`;
    };
    let message = `HUMAN SELECTED ${humWeapon} AND COMPUTER SELECTED ${compWeapon}!! ${result}!`;
    messageBoard.textContent = message;
    checkForWinner()
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
            games++;
            displayResults(humWeapon, compWeapon, 'tie')
            displayPoints(humPoints, comPoints, tiePoints, games)
        } else if (humWeapon === 'rock' && compWeapon === 'scissors' ||
            humWeapon === 'paper' && compWeapon === 'rock' ||
            humWeapon === 'scissors' && compWeapon === 'paper') {
            humPoints++;
            games++;
            displayResults(humWeapon, compWeapon, 'hum')
            displayPoints(humPoints, comPoints, tiePoints, games);
        } else {
            comPoints++;
            games++;
            displayResults(humWeapon, compWeapon, 'comp')
            displayPoints(humPoints, comPoints, tiePoints, games);
        };
    };
};

function newGame (e) {
    const areWePlaying = e.target.id;
    if (areWePlaying === 'yes') {
        console.log('yes');
        humPoints = 0;
        comPoints = 0;
        tiePoints = 0;
        games = 0;
        displayPoints(humPoints, comPoints, tiePoints, games);
        restartGame.classList.add('displayMeNot');
        weaponBox.classList.remove('displayMeNot');
    } else if (areWePlaying === 'no') {
        restartGame.classList.add('displayMeNot');
        thanksForPlaying.classList.remove('displayMeNot');
    };
};

window.addEventListener('click', getHumWep);
window.addEventListener('click', newGame);
restartGame.classList.add('displayMeNot');
thanksForPlaying.classList.add('displayMeNot');