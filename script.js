document.addEventListener("DOMContentLoaded", function () {
    let array = [0, 0, 0, 0, 0, 0, 0, 0];
    let redCounter = 0;
    let blueCounter = 0;

    const arrayContainer = document.getElementById("array-container");
    const redCounterDisplay = document.getElementById("red-counter");
    const blueCounterDisplay = document.getElementById("blue-counter");

    function updateDisplay() {
        arrayContainer.innerHTML = "";
        array.forEach((value, index) => {
            const container = document.createElement("div");
            container.classList.add("image-container");

            const img = document.createElement("img");
            img.src = `img/${value}.png`; 
            
            const plusButton = document.createElement("button");
            plusButton.textContent = "+";
            plusButton.addEventListener("click", () => {
                if (array[index] < 3) array[index]++;
                updateDisplay();
            });

            const minusButton = document.createElement("button");
            minusButton.textContent = "-";
            minusButton.addEventListener("click", () => {
                if (array[index] > 0) array[index]--;
                updateDisplay();
            });

            container.appendChild(plusButton);
            container.appendChild(img);
            container.appendChild(minusButton);
            arrayContainer.appendChild(container);
        });

        redCounterDisplay.textContent = redCounter;
        blueCounterDisplay.textContent = blueCounter;
    }

    // Swap 2 ↔ 3 in array and swap counters
    document.getElementById("toggle-btn").addEventListener("click", () => {
        array = array.map(value => (value === 2 ? 3 : value === 3 ? 2 : value));

        // Swap counter values
        [redCounter, blueCounter] = [blueCounter, redCounter];

        updateDisplay();
    });

    // Red Counter Increase/Decrease
    document.getElementById("red-plus").addEventListener("click", () => {
        if (redCounter < 8) redCounter++;
        updateDisplay();
    });

    document.getElementById("red-minus").addEventListener("click", () => {
        if (redCounter > 0) redCounter--;
        updateDisplay();
    });

    // Blue Counter Increase/Decrease
    document.getElementById("blue-plus").addEventListener("click", () => {
        if (blueCounter < 8) blueCounter++;
        updateDisplay();
    });

    document.getElementById("blue-minus").addEventListener("click", () => {
        if (blueCounter > 0) blueCounter--;
        updateDisplay();
    });

    updateDisplay();
});
