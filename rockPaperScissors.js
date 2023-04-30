// You should use argument: "Rock", "Paper" or "Scissors" ("r"/"rock"/"Rock")
rockPaperScissors('rock');



function rockPaperScissors(playerTurn) {

  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';

  let computerTurn;

  if (playerTurn === 'r' || playerTurn === 'rock' || playerTurn === 'Rock') {
    playerTurn = rock;
  } else if (
    playerTurn === 'p' ||
    playerTurn === 'paper' ||
    playerTurn === 'Paper'
  ) {
    playerTurn = paper;
  } else if (
    playerTurn === 's' ||
    playerTurn === 'scissors' ||
    playerTurn === 'Scissors'
  ) {
    playerTurn = scissors;
  } else {
    console.log('\x1b[31mInvalid input! Try again...\x1b[0m');
		return
  }

  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

  if (computerRandomNumber === 1) {
    computerTurn = rock;
  } else if (computerRandomNumber === 2) {
    computerTurn = paper;
  } else if (computerRandomNumber === 3) {
    computerTurn = scissors;
  }

  console.log(`You choose: ${playerTurn}`);
  console.log(`Computer chooses: ${computerTurn}`);

  if (
    (playerTurn === rock && computerTurn === scissors) ||
    (playerTurn === paper && computerTurn === rock) ||
    (playerTurn === scissors && computerTurn === paper)
  ) {
    console.log('\x1b[92mYou win!');
  } else if (
    (playerTurn === rock && computerTurn === rock) ||
    (playerTurn === paper && computerTurn === paper) ||
    (playerTurn === scissors && computerTurn === scissors)
  ) {
    console.log('\x1b[93mDraw!');
  } else if (
    (playerTurn === rock && computerTurn === paper) ||
    (playerTurn === paper && computerTurn === scissors) ||
    (playerTurn === scissors && computerTurn === rock)
  ) {
    console.log('\x1b[31mYou lost!');
  }
}

