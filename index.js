const DOMselectionButtons = document.querySelectorAll("[data-selection]");
const DOMselections = document.querySelectorAll(".selection");
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
    selection: DOMuserSelection,
  },
  {
    name: "computer",
    isWinner: false,
    score: 0,
    selection: DOMcomputerSelection,
  },
];

DOMselectionButtons.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", () => {
    const selectionName = selectionBtn.dataset.selection;

    const userSelection = makeSelection(selectionName);
    const computerSelection = makeRandomSelection();

    printSelectionsToDOM(userSelection, DOMuserSelection);
    printSelectionsToDOM(computerSelection, DOMcomputerSelection);

    animateDOMselection();

    decideWinner(userSelection, computerSelection);
    styleWinner();
    printScoresToDOM();

  });
});


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

function styleWinner() {
  PLAYERS.forEach(player => {
    if (player.isWinner) {
      player.selection.classList.add("winner")
    } else {
      player.selection.classList.remove("winner")
    }

  })
}


function printSelectionsToDOM(selection, place) {
  place.textContent = selection.sign;
}

function animateDOMselection() {
  DOMselections.forEach(selection => {
    //selection animation
    selection.classList.add("scale");
    setTimeout(() => { selection.classList.remove("scale"); }, 200)
  })
}

function handleScore() {
  PLAYERS.forEach(player => {
    if (player.isWinner) {
      player.score++;
    } else {
      return
    }
  })
}

function printScoresToDOM() {
  handleScore();
  DOMuserScore.textContent = PLAYERS[0].score;
  DOMcomputerScore.textContent = PLAYERS[1].score;
}
