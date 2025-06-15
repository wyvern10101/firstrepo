// Get elements
const countDisplay = document.getElementById("count");
const button = document.getElementById("clickBtn");

// Get count from localStorage or initialize to 0
let count = Number(localStorage.getItem("clickCount")) || 0;

// Update display
function updateDisplay() {
    countDisplay.textContent = "Clicks: " + count;
}

// On button click, increase count and update
button.addEventListener("click", () => {
    count += 1;
    localStorage.setItem("clickCount", count);
    updateDisplay();
});

// Show initial count
updateDisplay();