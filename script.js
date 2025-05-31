const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/.=()";
  
  if (allowedKeys.includes(event.key)) {
    append(event.key === '=' ? '' : event.key);
    if (event.key === '=') calculate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
