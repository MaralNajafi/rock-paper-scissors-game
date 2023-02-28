const DOMselectionButtons = document.querySelectorAll("[data-selection]");

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
    decideWinner(userSelection,computerSelection);
    
  });
});

function makeSelection(selectionName) {
    const userSelection = SELECTIONS.find((selection) => {
        return selection.name === selectionName;
      });
      console.log(`You: ${userSelection.sign}`);
      return userSelection;
}

function makeRandomSelection() {
  const randomSelectionIndex = Math.floor(Math.random() * SELECTIONS.length);
  const randomSelection = SELECTIONS[randomSelectionIndex];
  console.log(`Computer: ${randomSelection.sign}`);

  return randomSelection;
}

function decideWinner(userSelection, computerSelection) {
    if (userSelection.name === computerSelection.name) {
        console.log("you draw");
      } else {
        if (userSelection.name === computerSelection.beats) {
          console.log("you lost");
        }else{
          console.log("you won");
        }
      }
}