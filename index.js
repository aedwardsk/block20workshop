//state
const state = {
  numBank: [],
  odds: [],
  evens: [],
};
//TODO need to write function to display output
function render() {
  numBankDisp = document.querySelector("#numberBank output");
  numBankDisp.textContent = state.numBank.join();

  oddsDisp = document.querySelector("#odds output");
  oddsDisp.textContent = state.odds.join();

  evensDisp = document.querySelector("#evens output");
  evensDisp.textContent = state.evens.join();
}

//TODO need to write sort one function.
function sortOne() {
  for (let i = 0; i < state.numBank.length; i++) {
    if (state.numBank[i] % 2 === 0) {
      state.evens.push(state.numBank[i]);
    } else {
      state.odds.push(state.numBank[i]);
    }
  }
  state.numBank = [];
  render();
}
const sortOneButton = document.querySelector("#sortOne");
sortOneButton.addEventListener("click", sortOne);
const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", sortAll);

//TODO need to write store function for the sort all odd and even.
function storingSortAllNum() {
  state.evens = [];
  state.odds = [];

  for (let i = 0; i < state.numBank.length; i++) {
    if (state.numBank[i] % 2 === 0) {
      state.evens.push(state.numBank[i]);
    } else {
      state.odds.push(state.numBank[i]);
    }
  }
}
//TODO need to write sort all function.
function sortAll() {
  storingSortAllNum();
  state.numBank = [];
  render();
}
//TODO nee to make click events for both sorts

//function complete for adding numbers to the form
const addNumToSheet = document.querySelector("form");
addNumToSheet.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = document.querySelector('input[name="number"]');
  const addingNumber = parseInt(numberInput.value, 10);

  if (addingNumber <= 0 || !Number.isInteger(addingNumber)) {
    alert("Please enter a valid positive integer.");
    return;
  }
  state.numBank.push(addingNumber);

  render();
  numberInput.value = "";
});

//TODO
