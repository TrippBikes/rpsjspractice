let weps = ['rock', 'paper', 'scissors'];

function computerSelection() {
    const ran = Math.floor(Math.random() * weps.length);
    return weps[ran];
};
function playRound(comp, hum) {
    let winner = ""
    if (comp === hum) {
        winner = 'tie'
    } else if (comp === 'rock' & hum === 'scissors' ||
    comp === 'paper' & hum === 'rock' ||
    comp === 'scissors' & hum === "paper") {
        winner = 'comp'
    } else {winner = 'hum'};
    console.log(winner);
    return winner
};
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection(), prompt("Rock paper or scissors: ").toLowerCase());
    };
};