let q = await Q5.webgpu();

let maxCells = 36;
let cellSize = 30;
let cellSizeRow = cellSize;
let cellSizeCol = cellSize;
let columnCount;
let rowCount;
let currentCells = [];
let nextCells = [];
let kitty = "#f5e0dc";
let catppuccin = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
  "#89b4fa",
  "#74c7ec",
  "#89dceb",
  "#94e2d5",
  "#a6e3a1",
  "#f9e2af",
  "#fab387",
  "#eba0ac",
  "#f38ba8",
  "#cba6f7",
  "#f5c2e7",
  "#f2cdcd",
  "#f5e0dc",
];

let worker;
let computing;

q.setup = () => {
  worker = new Worker("worker.js");
  computing = false;

  worker.onmessage = function (e) {
    nextCells = e.data;
    currentCells = nextCells;
    computing = false; // Allow next computation
  };

  createCanvas();
  frameRate(12);
  displayMode("maxed");
  imageMode(CORNERS);
  // Calculate columns and rows

  if (width > height) {
    columnCount = floor(width / cellSize);
    rowCount = floor(height / cellSize);

    if (columnCount > maxCells) {
      let ratio = columnCount / maxCells; // Changed maxCount to maxCells
      columnCount = maxCells;
      rowCount = rowCount * ratio;
    }

    if (rowCount > maxCells) {
      let ratio = width / height;
      rowCount = maxCells;
      columnCount = floor(columnCount * ratio);
    }

    cellSizeRow = height / rowCount;
    cellSizeCol = width / columnCount;
  } else {
    columnCount = floor(width / cellSize);
    rowCount = floor(height / cellSize);

    if (columnCount > maxCells) {
      let ratio = width / height;
      columnCount = maxCells;
      rowCount = floor(rowCount * ratio);
    }

    if (rowCount > maxCells) {
      let ratio = rowCount / maxCells;
      rowCount = maxCells;
      columnCount = columnCount * ratio;
    }

    cellSizeRow = height / rowCount;
    cellSizeCol = width / columnCount;
  }

  for (let column = 0; column < columnCount; column++) {
    currentCells[column] = [];
  }

  for (let column = 0; column < columnCount; column++) {
    nextCells[column] = [];
  }

  randomColor();
  background("#1e1e2e");
  noloop();
  randomizeBoard();
};

q.draw = () => {
  clear();
  background(kitty);
  generate();
  renderBoard();
  cursor();
};

function renderBoard() {
  noStroke();
  beginShape();
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      let cell = currentCells[column][row];
      fill(cell ? "#1e1e2e" : kitty);
      stroke("#1e1e2e");
      rect(
        column * cellSizeCol - width / 2,
        row * cellSizeRow - height / 2,
        cellSizeCol,
        cellSizeRow,
      );
    }
  }
  endShape();
}

function cursor() {
  let bg = mouseIsPressed ? "#1e1e2e" : kitty;
  let fg = mouseIsPressed ? kitty : "#1e1e2e";

  fill(bg);
  circle(mouseX - width / 2, mouseY - height / 2, cellSizeRow * 5);

  fill(fg);
  textAlign(CENTER, CENTER);
  textSize(cellSizeRow);
  text("CLICK", mouseX - width / 2, mouseY - height / 2, cellSizeRow * 3);
}

function randomColor() {
  kitty = catppuccin[(Math.random() * catppuccin.length) | 0]; // Bitwise OR for faster rounding
}

q.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);

  cellSizeRow = height / rowCount;
  cellSizeCol = width / columnCount;
};

// Reset board when mouse is pressed
q.mousePressed = () => {
  randomColor();
  randomizeBoard();
  if (!isLooping()) loop();
};

// Fill board randomly
function randomizeBoard() {
  currentCells = currentCells.map((row) =>
    row.map(() => (Math.random() < 0.5 ? 1 : 0)),
  );
}

function generate() {
  if (!computing) {
    computing = true;
    worker.postMessage({ currentCells, columnCount, rowCount });
  }
}
