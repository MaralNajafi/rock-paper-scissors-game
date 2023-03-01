const DOMselectionButtons = document.querySelectorAll("[data-selection]");
const DOMuserSelection = document.getElementById("userSelection");
const DOMcomputerSelection = document.getElementById("computerSelection");
const DOMuserScore = document.getElementById("userScore");
const DOMcomputerScore = document.getElementById("computerScore");

const SELECTIONS = [
  {
    name: "rock",
    sign: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    sign: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    sign: "✌️",
    beats: "paper",
  },
];

const PLAYERS = [
  {
    name: "user",
    isWinner: false,
    score: 0,
  },
  {
    name: "computer",
    isWinner: false,
    score: 0,
  },
];

DOMselectionButtons.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", () => {
    const selectionName = selectionBtn.dataset.selection;

    const userSelection = makeSelection(selectionName);
    const computerSelection = makeRandomSelection();

    printSelectionsToDOM(userSelection, DOMuserSelection);
    printSelectionsToDOM(computerSelection, DOMcomputerSelection);

    decideWinner(userSelection, computerSelection);
    
    printScoresToDOM();

  });
});

function printSelectionsToDOM(selection, place) {
  place.textContent = selection.sign;
}

function printScoresToDOM() {
  handleScore();
  DOMuserScore.textContent = PLAYERS[0].score;
  DOMcomputerScore.textContent = PLAYERS[1].score;
}

function makeSelection(selectionName) {
  const userSelection = SELECTIONS.find((selection) => {
    return selection.name === selectionName;
  });

  return userSelection;
}

function makeRandomSelection() {
  const randomSelectionIndex = Math.floor(Math.random() * SELECTIONS.length);
  const randomSelection = SELECTIONS[randomSelectionIndex];

  return randomSelection;
}

function decideWinner(userSelection, computerSelection) {
  if (userSelection.name === computerSelection.name) {
    PLAYERS.forEach(player => { player.isWinner = false })

  } else {
    if (userSelection.name === computerSelection.beats) {
      PLAYERS[0].isWinner = false;
      PLAYERS[1].isWinner = true;
    } else {
      PLAYERS[0].isWinner = true;
      PLAYERS[1].isWinner = false;
    }
  }
}

function handleScore() {
  PLAYERS.forEach(player => {
    if (player.isWinner) {
      player.score++;
      console.log(player.name, player.score);
    } else {
      return
    }
  })
}