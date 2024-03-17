let num = 16;
const container = document.querySelector(".container");

createBoxes(num);

function createBoxes(num) {
    let collectionRow = [];

    // create the rows
    for (let i = num; i > 0; i--) {
        let oneRow = document.createElement("div");
        oneRow.classList.add("row-box");
        container.appendChild(oneRow);
        collectionRow.push(oneRow);
    }

    // create the boxes in each row
    for (const row of collectionRow) {
        for (let i = num; i > 0; i--) {
            let oneBox = document.createElement("div");
            oneBox.classList.add("one-box");
            row.appendChild(oneBox);
        }
    }

    // add the eventlistener to change box color
    const boxesNodes = document.querySelectorAll(".one-box");
    boxesNodes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "grey";
        });
    });
}

// Button
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let newGrid;
    while (true) {
        newGrid = +prompt("Please enter a number:", 16);
        if (Number.isInteger(newGrid) && (newGrid <= 100) && (newGrid > 0)) break;
    }
    container.replaceChildren();
    createBoxes(newGrid);
})

