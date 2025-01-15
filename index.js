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
  const sortOneButton = document.querySelector("#sortOne");
}
//TODO need to write store function for the sort all odd and even.
//TODO need to write sort all function.
function sortAll() {
  const sortAllButton = document.querySelector("#sortAll");
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
