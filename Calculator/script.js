let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}
function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}
function calculatePercentage() {
  try {
      const result = eval(displayValue + "/100");
      document.getElementById('display').value = result;
      displayValue = result.toString();
  } catch (error) {
      document.getElementById('display').value = 'Error';
      displayValue = '';
  }
}
function calculateSquare() {
  try {
      const result = Math.pow(eval(displayValue), 2);
      document.getElementById('display').value = result;
      displayValue = result.toString();
  } catch (error) {
      document.getElementById('display').value = 'Error';
      displayValue = '';
  }
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
