// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0, 0);
//   canvas.style("z-index", "-1"); // Sends it to the background
//   canvas.style("position", "fixed"); // Keeps it fixed even when scrolling
// }
//
// function draw() {
//   background(0); // Black background
// }
//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Calculate columns and rows
  // columnCount = floor(width / cellSize);
  // rowCount = floor(height / cellSize);

  cellSizeRow = height / rowCount;
  cellSizeCol = width / columnCount;
}
//
// function draw() {
//   //when mouse button is pressed, circles turn black
//   if (mouseIsPressed === true) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//
//   //white circles drawn at mouse position
//   circle(mouseX, mouseY, 100);
// }
//
let cellSize = 20;
let cellSizeRow = cellSize;
let cellSizeCol = cellSize;
let columnCount;
let rowCount;
let currentCells = [];
let nextCells = [];

function setup() {
  // Set simulation framerate to 10 to avoid flickering
  frameRate(12);
  let canvas = createCanvas(windowWidth, windowHeight);
  // let canvas = createCanvas(720, 400);
  canvas.position(0, 0);
  canvas.style("z-index", "-1"); // Sends it to the background
  canvas.style("position", "fixed"); // Keeps it fixed even when scrolling

  // Calculate columns and rows
  columnCount = floor(width / cellSize);
  rowCount = floor(height / cellSize);

  cellSizeRow = height / rowCount;
  cellSizeCol = width / columnCount;

  // Set each column in current cells to an empty array
  // This allows cells to be added to this array
  // The index of the cell will be its row number
  for (let column = 0; column < columnCount; column++) {
    currentCells[column] = [];
  }

  // Repeat the same process for the next cells
  for (let column = 0; column < columnCount; column++) {
    nextCells[column] = [];
  }

  randomizeBoard();
  noLoop();
  describe(
    "Grid of squares that switch between white and black, demonstrating a simulation of John Conway's Game of Life. When clicked, the simulation resets.",
  );
}

function draw() {
  background(200);
  generate();

  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Get cell value (0 or 1)
      let cell = currentCells[column][row];

      // Convert cell value to get black (0) for alive or white (255 (white) for dead
      // fill((1 - cell / 8) * 255);
      if (cell === 0) {
        fill("#fff");
      } else {
        fill("#001");
      }
      stroke(0);
      // stroke("#1e1e2e");
      rect(column * cellSizeCol, row * cellSizeRow, cellSizeCol, cellSizeRow);
    }
  }
  circles();
  // cubes();
}

function circles() {
  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  //white circles drawn at mouse position
  circle(mouseX, mouseY, cellSizeRow);
}

function cubes() {
  // background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Rotate the coordinate system a little more each frame.
  let angle = frameCount * 0.01;
  let ca = cos(angle);
  let sa = sin(angle);
  applyMatrix(ca, 0, sa, 0, 0, 1, 0, 0, -sa, 0, ca, 0, 0, 0, 0, 1);

  // Draw a box.
  box();
}

// Reset board when mouse is pressed
function mousePressed() {
  randomizeBoard();
  loop();
}

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
