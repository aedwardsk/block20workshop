// TODO: this file! :)
// elements needed to work with

const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");

//state
const state = {
  numBank: [],
  odds: [],
  evens: [],
};
//function for addnumToSheet
const addNumToSheet = document.querySelector("form");
addNumToSheet.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = document.querySelector('input[name="number"]');
  const addingNumber = parseInt(numberInput.value, 10);

  if (addingNumber <= 0 || !Number.isInteger(addingNumber)) {
    return "invalid";
  }
  for (let i = 0; i < addingNumber; i++) {
    //may need to change back to i number
    state.numBank.push(i);
  }
});
