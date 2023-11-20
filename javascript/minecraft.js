//start screen
let startScreen = document.getElementById("start-Screen");
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {
  startScreen.style.display = "none";
});
// const acceptButton = document.querySelector("button");
const gridContainer = document.querySelector("#grid-container");

//I built an array to skew the randomization ratio to get less gold and diamonds
let groundMatrix = [1, 2, 2, 2, 2, 3];

function getRandomInt() {
  return groundMatrix[Math.floor(Math.random() * 6)];
}

//Initital Greed Mapping
const gridMap = [
  //row 20
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  //row 19
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    ,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
  ],
  //row 18
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4,
    4, 4, 4, 0, 0,
  ],
  //row 17
  [
    0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4,
    4, 4, 0, 0, 0,
  ],
  //row 16
  [
    0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  //row 15
  [
    0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  //row 14
  [
    0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  //row 13
  [
    0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  //row 12
  [
    0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 5, 5,
  ],
  //row 11
  [
    0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 8, 9, 0, 0, 0, 0, 0,
    0, 5, 5, 3, 1,
  ],
  //row 10
  [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  ],
  //row 9
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 8
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 7
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 6
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 5
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 4
  [
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
    getRandomInt(),
  ],
  //row 3
  [
    getRandomInt(),
    getRandomInt(),
    2,
    2,
    getRandomInt(),
    2,
    getRandomInt(),
    2,
    2,
    2,
    2,
    getRandomInt(),
    2,
    2,
    2,
    2,
    getRandomInt(),
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
  ],
  //row 2
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  //row 1
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3,
  ],
];

const appendix = [
  "cell",
  "gold",
  "soil",
  "diamond",
  "cloud",
  "stone",
  "leaves",
  "wood",
  "strongWood",
  "flowers",
  "grass",
  "strongLeaves",
];
//selecting the div inventory html elements
goldStock = document.getElementById("gold-span");
soilStock = document.getElementById("soil-span");
diamondStock = document.getElementById("diamond-span");
cloudStock = document.getElementById("cloud-span");
stoneStock = document.getElementById("stone-span");
leavesStock = document.getElementById("leaves-span");
woodStock = document.getElementById("wood-span");
strongWoodStock = document.getElementById("strongWood-span");
flowersStock = document.getElementById("flowers-span");
grassStock = document.getElementById("grass-span");
strongLeavesStock = document.getElementById("strongLeaves-span");

// creating inventory count variables
let goldCount = 0;
let soilCount = 0;
let diamondCount = 0;
let cloudCount = 0;
let stoneCount = 0;
let leavesCount = 0;
let woodCount = 0;
let strongWoodCount = 0;
let flowersCount = 0;
let grassCount = 0;
let strongLeavesCount = 0;

//selecting sound effects

const vacuumSound = document.getElementById("vacuumSound");
const axeSound = document.getElementById("axeSound");
const coinsSound = document.getElementById("coinsSound");
const rockSound = document.getElementById("rockSound");
const shovelSound = document.getElementById("shovelSound");

const cellClickHandler = (event) => {
  let clickedCellCurTarget = event.currentTarget;
  let rowIndex = parseInt(clickedCellCurTarget.dataset.row);
  let cellIndex = parseInt(clickedCellCurTarget.dataset.column);

  // Now you can use iValue and jValue in your click handler
  console.log("Clicked cell at position (" + rowIndex + ", " + cellIndex + ")");

  console.log("event", event);
  let clickedCell = event.target;
  console.log("clickedCell", clickedCell);

  // console.log("gridMap", gridMap);
  const currentCellValue = gridMap[rowIndex][cellIndex];
  console.log("currentCellValue", currentCellValue);

  if (selectedTool === "iron-shovel") {
    switch (currentCellValue) {
      case 2:
        gridMap[rowIndex][cellIndex] = 0;
        shovelSound.play();

        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("soil");
        clickedCell.classList.add("cell");
        soilCount++;
        soilStock.innerHTML = `${soilCount}`;

        break;
      case 10:
        gridMap[rowIndex][cellIndex] = 0;
        shovelSound.play();

        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("grass");
        clickedCell.classList.add("cell");
        grassCount++;
        grassStock.innerHTML = `${grassCount}`;

        break;
      default:
    }
  }

  if (selectedTool === "iron-axe") {
    switch (currentCellValue) {
      case 6:
        gridMap[rowIndex][cellIndex] = 0;
        axeSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("leaves");
        clickedCell.classList.add("cell");
        leavesCount++;
        leavesStock.innerHTML = `${leavesCount}`;
        break;
      case 7:
        gridMap[rowIndex][cellIndex] = 0;
        axeSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("wood");
        clickedCell.classList.add("cell");
        woodCount++;
        woodStock.innerHTML = `${woodCount}`;
        break;
      case 8:
        gridMap[rowIndex][cellIndex] = 0;
        axeSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("strongWood");
        clickedCell.classList.add("cell");
        strongWoodCount++;
        strongWoodStock.innerHTML = `${strongWoodCount}`;
        break;

      case 9:
        gridMap[rowIndex][cellIndex] = 0;
        axeSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("flowers");
        clickedCell.classList.add("cell");
        flowersCount++;
        flowersStock.innerHTML = `${flowersCount}`;
        break;
      case 11:
        gridMap[rowIndex][cellIndex] = 0;
        axeSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("strongLeaves");
        clickedCell.classList.add("cell");
        strongLeavesCount++;
        strongLeavesStock.innerHTML = `${strongLeavesCount}`;
        break;
      default:
        break;
    }
  }
  if (selectedTool === "diamond-pick-axe") {
    switch (currentCellValue) {
      case 1:
        gridMap[rowIndex][cellIndex] = 0;
        coinsSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("gold");
        clickedCell.classList.add("cell");
        goldCount++;
        goldStock.innerHTML = `${goldCount}`;
        break;
        break;
      case 3:
        gridMap[rowIndex][cellIndex] = 0;
        coinsSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("diamond");
        clickedCell.classList.add("cell");
        diamondCount++;
        diamondStock.innerHTML = `${diamondCount}`;

        break;
      case 5:
        gridMap[rowIndex][cellIndex] = 0;
        rockSound.play();
        clickedCell.classList.remove("cell");
        clickedCell.classList.remove("stone");
        clickedCell.classList.add("cell");
        stoneCount++;
        stoneStock.innerHTML = `${stoneCount}`;
        break;
      default:
        break;
    }
  }
  if (selectedTool === "vacuum") {
    console.log("came to vaacum");
    console.log("currentCellValue in vaacum", currentCellValue);
    if (currentCellValue === 4) {
      gridMap[rowIndex][cellIndex] = 0;
      vacuumSound.play();

      clickedCell.classList.remove("cell");
      clickedCell.classList.remove("cloud");
      clickedCell.classList.add("cell");
      cloudCount++;
      cloudStock.innerHTML = `${cloudCount}`;
    }
  }
};

//reset button and listener
// function resetGame() {
//   goldCount = 0;
//   soilCount = 0;
//   diamondCount = 0;
//   cloudCount = 0;
//   stoneCount = 0;
//   leavesCount = 0;
//   woodCount = 0;
//   strongWoodCount = 0;
//   flowersCount = 0;
//   grassCount = 0;
//   strongLeavesCount = 0;

//   goldStock.innerHTML = "";
//   soilStock.innerHTML = "";
//   diamondStock.innerHTML = "";
//   cloudStock.innerHTML = "";
//   stoneStock.innerHTML = "";
//   leavesStock.innerHTML = "";
//   woodStock.innerHTML = "";
//   strongWoodStock.innerHTML = "";
//   flowersStock.innerHTML = "";
//   grassStock.innerHTML = "";
//   strongLeavesCount.innerHTML = "";
//   goldStock.innerHTML = "";
//   goldStock.innerHTML = "";
// }

// const resetbutton = document.getElementById("reset-button");

// resetbutton.addEventListener("click", resetGame());

let selectedTool = "iron-shovel";

// // tool selectors
const ironShovelButton = document.querySelector("#iron-shovel-button");
console.log("ironShovelButton", ironShovelButton);
const ironAxeButton = document.querySelector("#iron-axe-button");
const diamondPickAxeButton = document.querySelector("#diamond-pickaxe-button");
const vacuumButton = document.querySelector("#vacuum-button");

ironShovelButton.addEventListener("click", function () {
  selectedTool = "iron-shovel";
  body.style.cursor = 'url("/img/shovelCursorIcon.png"), auto';
});
ironAxeButton.addEventListener("click", function () {
  selectedTool = "iron-axe";
  body.style.cursor = 'url("/img/icons8-axe-30.png"), auto';
});
diamondPickAxeButton.addEventListener("click", function () {
  selectedTool = "diamond-pick-axe";
  body.style.cursor = 'url("/img/icons8-golden-fever-30.png"), auto';
});

vacuumButton.addEventListener("click", function () {
  selectedTool = "vacuum";
  body.style.cursor = 'url("/img/vacuum-cursor.png"), auto';
});

//Populating the grid using a loop

for (let i = 0; i < gridMap.length; i++) {
  for (let j = 0; j < gridMap[i].length; j++) {
    let gridCell = document.createElement("div");
    let currentCellValue = gridMap[i][j];

    if (appendix[currentCellValue] !== "cell") {
      gridCell.classList.add("cell", `${appendix[currentCellValue]}`);

      gridContainer.appendChild(gridCell);
    } else {
      gridCell.classList.add(appendix[currentCellValue]);
    }

    // Set data attributes for "i" and "j" values
    gridCell.dataset.row = i;
    gridCell.dataset.column = j;

    gridCell.addEventListener("click", cellClickHandler);

    gridContainer.appendChild(gridCell);
  }
}

const body = document.body;

// Change the cursor property

const inventoryBox = document.querySelector("#inventory-box");
const inventoryContainer = document.querySelector("#inventory-container");
let isInventorydisplayed = false;

let isInventoryDisplayed = false;

inventoryBox.addEventListener("click", function () {
  console.log("treasure box clicked");
  const inventoryContainer = document.getElementById("inventory-container");

  if (isInventoryDisplayed === false) {
    inventoryContainer.classList.remove("hidden");
    isInventoryDisplayed = true;
  } else {
    inventoryContainer.classList.add("hidden");
    isInventoryDisplayed = false;
  }
});
