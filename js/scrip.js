const player1 = {
  pointsTotal: 0,
  pointsThisTurn: 0,
};

const player2 = {
  pointsTotal: 0,
  pointsThisTurn: 0,
};
let game;
let turns = 5;
let flag = true;
let firstRound = true;
function returnText() {
  let score = document.getElementById("gameScore").value;
  game = score;
}

function rollDice() {
  const firstDice = Math.floor(Math.random() * 6) + 1;
  const secondDice = Math.floor(Math.random() * 6) + 1;
  let total;
  if (firstDice == secondDice) {
    total = 0;
  } else {
    total = firstDice + secondDice;
  }

  return total;
}

function randomPlayer() {
  const random = Math.floor(Math.random() * 2) + 1;
  if (random === 1) {
    flag = true;
  } else if (random === 2) {
    flag = false;
  }
}

function hold() {
  if (flag === false) {
    flag = true;
    turns = 5;
    const button = document.getElementById("roll-btn");
    const player = document.getElementById("player 2");
    const playerScore = document.getElementById("player 2 total score");
    button.innerText = 5;
    player2.pointsTotal += player2.pointsThisTurn;
    player2.pointsThisTurn = 0;
    player.innerText = 0;
    playerScore.innerText = player2.pointsTotal;
  } else if (flag === true) {
    flag = false;
    turns = 5;
    const button = document.getElementById("roll-btn");
    const player = document.getElementById("player 1");
    const playerScore = document.getElementById("player 1 total score");
    button.innerText = 5;
    player1.pointsTotal += player1.pointsThisTurn;
    player1.pointsThisTurn = 0;
    player.innerText = 0;
    playerScore.innerText = player1.pointsTotal;
  }
}

function rollPlayer1() {
  const roll = rollDice();
  const player = document.getElementById("player 1");
  const button = document.getElementById("roll-btn");

  if (roll != 0) {
    player1.pointsThisTurn += roll;
    player.innerText = player1.pointsThisTurn;
    button.innerText = turns;
  } else if (roll === 0) {
    flag = false;
    turns = 5;
    const button = document.getElementById("roll-btn");
    button.innerText = 5;
    player1.pointsThisTurn = 0;
    player.innerText = 0;
  }
}

function rollPlayer2() {
  const roll = rollDice();
  const player = document.getElementById("player 2");
  const button = document.getElementById("roll-btn");

  if (roll != 0) {
    player2.pointsThisTurn += roll;
    player.innerText = player2.pointsThisTurn;
    button.innerText = turns;
  } else if (roll === 0) {
    flag = true;
    turns = 5;
    const button = document.getElementById("roll-btn");
    button.innerText = 5;
    player2.pointsThisTurn = 0;
    player.innerText = 0;
  }
}

function gameRoll() {
  if (!game) {
    alert("to play submit score");
    return;
  } else if (
    player1.pointsTotal < Number(game) &&
    player2.pointsTotal < Number(game)
  ) {
    if (firstRound) {
      randomPlayer();
      firstRound = false;
    }
    if (flag === true) {
      if (turns > 0) {
        turns -= 1;
        rollPlayer1();
      } else if (turns == 0) {
        return;
      }
    } else if (flag === false) {
      if (turns > 0) {
        turns -= 1;
        rollPlayer2();
      } else if (turns == 0) {
        return;
      }
    }
  } else {
    if (player1.pointsTotal >= game) {
      alert("player 1 won  click New Game");
    } else if (player2.pointsTotal >= game) {
      alert("player 2 won  click New Game");
    }
  }
}
