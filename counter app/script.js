const outputValue = document.querySelector('.outputValue');
const decreaseBtn = document.querySelector('.minusButton');
const increaseBtn = document.querySelector('.plusButton');
const userInput = document.querySelector('.input-sty');
const resetBtn = document.querySelector('.resetButton');

// get all values and check valid value
function getValues() {
  const resultValue = parseInt(outputValue.innerText) || 0;
  let userInputValue = parseInt(userInput.value);
  if (isNaN(userInputValue)) {
    userInputValue = 1;
  }
  return { resultValue, userInputValue };
}
// update the counter value
function updateOutput(newValue) {
  outputValue.innerText = newValue;
}
decreaseBtn.addEventListener('click', () => {
  const { resultValue, userInputValue } = getValues();
  updateOutput(resultValue - userInputValue);
});
increaseBtn.addEventListener('click', () => {
  const { resultValue, userInputValue } = getValues();
  updateOutput(resultValue + userInputValue);
});
resetBtn.addEventListener('click', () => {
  updateOutput(0);
  userInput.value = 1;
});

// key board
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' ) {
    increaseBtn.click();
  } else if (event.key === 'ArrowDown') {
    decreaseBtn.click();
  } else if (event.key.toLowerCase() === 'r') {
    resetBtn.click();
  }
});
