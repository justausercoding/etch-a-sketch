const container = document.querySelector(".container");

let num = 16;
let height = window.innerHeight;
let width = window.innerWidth;
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
console.log(collectionRow);

const boxesNodes = document.querySelectorAll(".one-box");

console.log(boxesNodes);

boxesNodes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        console.log(box);
        box.style.backgroundColor = "green";
    });
});
