const buttons = document.getElementsByClassName("button");
const textfield = document.getElementById("textfield");
let currentInput = "";
let lastInput = "";
let resultShown = false;

let operators = ["+", "-", "*", "/", "%"];

Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function(e) {
        handleInput(e.target.innerText);
    });
});

function handleInput(value) {
    if (value === "C") {
        currentInput = "";
        textfield.value = "";
        resultShown = false;
        return;
    }
    if (value === "CE") {
        currentInput = currentInput.slice(0, -1);
        textfield.value = currentInput;
        return;
    }
    if (value === "=") {
        try {
            // Evaluate safely
            let evalResult = eval(currentInput.replace(/%/g, "/100*"));
            if (evalResult === undefined) evalResult = "";
            textfield.value = evalResult;
            currentInput = evalResult.toString();
            resultShown = true;
        } catch {
            textfield.value = "Error";
            currentInput = "";
            resultShown = false;
        }
        return;
    }
    if (operators.includes(value)) {
        if (currentInput === "" && value !== "-") return; // Only allow - at start
        if (operators.includes(currentInput.slice(-1))) {
            // Replace last operator
            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }
        textfield.value = currentInput;
        resultShown = false;
        return;
    }
    if (value === ".") {
        // Prevent multiple decimals in a number
        let parts = currentInput.split(/\+|-|\*|\/|%/);
        let lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) return;
    }
    // If result was just shown and next input is a number, start new input
    if (resultShown && !isNaN(value)) {
        currentInput = value;
        textfield.value = currentInput;
        resultShown = false;
        return;
    }
    currentInput += value;
    textfield.value = currentInput;
    resultShown = false;
}
