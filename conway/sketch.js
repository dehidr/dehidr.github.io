let q = await Q5.webgpu();
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

q.setup = () => {
  createCanvas();
  frameRate(12);
  displayMode("maxed");
  imageMode(CORNERS);
  // Calculate columns and rows
  columnCount = floor(width / cellSize);
  rowCount = floor(height / cellSize);

  cellSizeRow = height / rowCount;
  cellSizeCol = width / columnCount;

  for (let column = 0; column < columnCount; column++) {
    currentCells[column] = [];
  }

  for (let column = 0; column < columnCount; column++) {
    nextCells[column] = [];
  }
  randomColor();
  noloop();
  randomizeBoard();
};

q.draw = () => {
  // clear();
  generate();
  renderBoard();
  cursor();
};

function renderBoard() {
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Get cell value (0 or 1)
      let cell = currentCells[column][row];

      // Convert cell value to get black (0) for alive or white (255 (white) for dead
      // fill((1 - cell / 8) * 255);
      if (cell === 0) {
        fill(kitty);
      } else {
        fill("#1e1e2e");
        // fill(catppuccin[(column + row) % 26]);
      }
      // stroke(0);
      stroke("#1e1e2e");
      // rect(column * cellSizeCol, row * cellSizeRow, cellSizeCol, cellSizeRow);
      rect(
        column * cellSizeCol - width / 2,
        row * cellSizeRow - height / 2,
        cellSizeCol,
        cellSizeRow,
      );
    }
  }
}

function cursor() {
  let bg = "#1e1e2e";
  let fg = kitty;
  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    bg = "#1e1e2e";
    fg = kitty;
  } else {
    fg = "#1e1e2e";
    bg = kitty;
  }
  //white circles drawn at mouse position
  //
  fill(bg);
  circle(mouseX - width / 2, mouseY - height / 2, cellSizeRow * 5);

  fill(fg);
  textAlign(CENTER, MIDDLE);
  textSize(cellSizeRow);
  text("CLICK", mouseX - width / 2, mouseY - height / 2, cellSizeRow * 3);
}

function randomColor() {
  kitty = catppuccin[Math.floor(Math.random() * catppuccin.length)];
}

q.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);

  // Calculate columns and rows
  // columnCount = floor(width / cellSize);
  // rowCount = floor(height / cellSize);

  cellSizeRow = height / rowCount;
  cellSizeCol = width / columnCount;
};

// Reset board when mouse is pressed
q.mousePressed = () => {
  randomizeBoard();
  loop();
};

// Fill board randomly
function randomizeBoard() {
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Randomly select value of either 0 (dead) or 1 (alive)
      currentCells[column][row] = random([0, 1]);
    }
  }
}

// Create a new generation
function generate() {
  // Loop through every spot in our 2D array and count living neighbors
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Column left of current cell
      // if column is at left edge, use modulus to wrap to right edge
      let left = (column - 1 + columnCount) % columnCount;

      // Column right of current cell
      // if column is at right edge, use modulus to wrap to left edge
      let right = (column + 1) % columnCount;

      // Row above current cell
      // if row is at top edge, use modulus to wrap to bottom edge
      let above = (row - 1 + rowCount) % rowCount;

      // Row below current cell
      // if row is at bottom edge, use modulus to wrap to top edge
      let below = (row + 1) % rowCount;

      // Count living neighbors surrounding current cell
      let neighbours =
        currentCells[left][above] +
        currentCells[column][above] +
        currentCells[right][above] +
        currentCells[left][row] +
        currentCells[right][row] +
        currentCells[left][below] +
        currentCells[column][below] +
        currentCells[right][below];

      // Rules of Life
      // 1. Any live cell with fewer than two live neighbours dies
      // 2. Any live cell with more than three live neighbours dies
      if (neighbours < 2 || neighbours > 3) {
        nextCells[column][row] = 0;
        // 4. Any dead cell with exactly three live neighbours will come to life.
      } else if (neighbours === 3) {
        nextCells[column][row] = 1;
        // 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
      } else nextCells[column][row] = currentCells[column][row];
    }
  }

  // Swap the current and next arrays for next generation
  let temp = currentCells;
  currentCells = nextCells;
  nextCells = temp;
}
