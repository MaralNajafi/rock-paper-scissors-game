const DOMselectionButtons = document.querySelectorAll("[data-selection]");
const DOMuserSelection = document.getElementById("userSelection");
const DOMcomputerSelection = document.getElementById("computerSelection");

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

DOMselectionButtons.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", () => {
    const selectionName = selectionBtn.dataset.selection;

    const userSelection = makeSelection(selectionName);
    const computerSelection = makeRandomSelection();

    printSelectionsToDOM(userSelection, DOMuserSelection);
    printSelectionsToDOM(computerSelection, DOMcomputerSelection);

    decideWinner(userSelection, computerSelection);

  });
});

function printSelectionsToDOM(selection, place) {
  place.textContent = selection.sign;
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
    console.log("you draw");
  } else {
    if (userSelection.name === computerSelection.beats) {
      console.log("you lost");
    } else {
      console.log("you won");
    }
  }
}