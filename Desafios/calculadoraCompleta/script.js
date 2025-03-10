let display = document.getElementById("display");
let currentExpression = "";
        
function appendCharacter(char) {
    if (currentExpression === "0" && char !== ".") {
        currentExpression = "";
    }
    currentExpression += char;
    display.textContent = currentExpression;
}
        
function calculateResult() {
    try {
        let result = eval(currentExpression);
        display.textContent = result;
        currentExpression = result.toString();
    } catch {
                display.textContent = "Erro";
                currentExpression = "";
    }
}
        
function clearDisplay() {
    currentExpression = "";
    display.textContent = "0";
}
        
function deleteLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    display.textContent = currentExpression || "0";
}