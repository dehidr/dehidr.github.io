self.onmessage = function (e) {
  let { currentCells, columnCount, rowCount } = e.data;
  let nextCells = [];

  const neighborOffsets = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  for (let column = 0; column < columnCount; column++) {
    nextCells[column] = [];
    for (let row = 0; row < rowCount; row++) {
      let neighbors = 0;

      // Count living neighbors
      for (let [dx, dy] of neighborOffsets) {
        let x = (column + dx + columnCount) % columnCount;
        let y = (row + dy + rowCount) % rowCount;
        neighbors += currentCells[x][y];
      }

      // Apply Game of Life rules
      nextCells[column][row] =
        neighbors === 3 || (neighbors === 2 && currentCells[column][row] === 1)
          ? 1
          : 0;
    }
  }

  self.postMessage(nextCells);
};
