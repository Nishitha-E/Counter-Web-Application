
document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
document.getElementById("decrementBtn").addEventListener("click", decrementCounter);
document.getElementById("resetBtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCountDisplay() {
    counterDisplay.textContent = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateCountDisplay();
}

function decrementCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCountDisplay();
    }
}

function resetCounter() {
    counterValue = 0;
    updateCountDisplay();
}
