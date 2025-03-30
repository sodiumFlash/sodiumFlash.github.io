let arr = [0, 1, 2, 3, 1, 0, 2, 3]; // Grid values (0-3)
let counters = [4, 6]; // Two number counters (0-8)

function getImage(value) {
    const images = ["images/img0.png", "images/img1.png", "images/img2.png", "images/img3.png"];
    return images[value]; 
}

function updateGrid() {
    const grid = document.getElementById("imageGrid");
    grid.innerHTML = ""; 

    arr.forEach((value, index) => {
        const div = document.createElement("div");
        div.className = "image-container";

        const btnPlus = document.createElement("button");
        btnPlus.textContent = "+";
        btnPlus.onclick = () => updateArray(index, 1);

        const img = document.createElement("img");
        img.src = getImage(value);

        const btnMinus = document.createElement("button");
        btnMinus.textContent = "-";
        btnMinus.onclick = () => updateArray(index, -1);

        div.appendChild(btnPlus);
        div.appendChild(img);
        div.appendChild(btnMinus);
        grid.appendChild(div);
    });
}

function updateArray(index, change) {
    arr[index] = Math.max(0, Math.min(3, arr[index] + change));
    updateGrid();
}

function updateCounter(index, change) {
    counters[index] = Math.max(0, Math.min(8, counters[index] + change));
    document.getElementById(`num${index + 1}`).textContent = counters[index];
}

function shiftLeft(counterIndex) {
    arr.shift();
    arr.push(0);
    updateCounter(counterIndex, -1); // Decrease the corresponding counter
    updateGrid();
}

function toggleValues() {
    arr = arr.map(value => (value === 2 ? 3 : value === 3 ? 2 : value));
    [counters[0], counters[1]] = [counters[1], counters[0]];

    document.getElementById(`num${1}`).textContent = counters[0];
    document.getElementById(`num${2}`).textContent = counters[1];
    
    updateGrid();
}

function resetValues() {
    arr = Array(8).fill(0);
    counters = [0, 0];
    updateGrid();
    document.getElementById("num1").textContent = 0;
    document.getElementById("num2").textContent = 0;
}

function start() {
    let total = Math.min(8, counters[0] + counters[1]); // Get sum, max 8
    arr = Array(total).fill(1).concat(Array(8 - total).fill(0)); // Fill leftmost with 1s
    updateGrid();
}

updateGrid();
