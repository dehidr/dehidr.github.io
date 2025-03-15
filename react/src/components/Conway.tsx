// @ts-nocheck
import { useEffect, useState } from "react";

const maxCells = 36;
const cellSize = 30;
let columnCount = maxCells;
let rowCount = maxCells;
let cellSizeRow = window.innerWidth / columnCount;
let cellSizeCol = window.innerHeight / rowCount;
let randomGrid;
let grid: (1 | 0)[][];
let setGrid: (arg0: (1 | 0)[][]) => void;
const generateRandomGrid = () =>
  Array.from({ length: rowCount }, () =>
    Array.from({ length: columnCount }, () => (Math.random() > 0.7 ? 1 : 0)),
  );
function restartGrid() {
  // fg = randomColor();
  setGrid(generateRandomGrid());
}
// const catppuccin = [
//   "#f5e0dc",
//   "#f2cdcd",
//   "#f5c2e7",
//   "#cba6f7",
//   "#f38ba8",
//   "#eba0ac",
//   "#fab387",
//   "#f9e2af",
//   "#a6e3a1",
//   "#94e2d5",
//   "#89dceb",
//   "#74c7ec",
//   "#89b4fa",
//   "#b4befe",
// ];
// let fg = randomColor();
// let bg = "#cdd6f4";
// let base = "#1e1e2e";
const fg = "#000";
const bg = "#fffbeb";
const base = "#000";

const GameOfLife = () => {
  calculateGround();
  [grid, setGrid] = useState(generateRandomGrid);

  const restartGame = () => {
    calculateGround();
    setGrid(generateRandomGrid());
  };

  const calculateColumnsAndRows = () => {
    calculateGround();
  };

  useEffect(() => {
    const handleResize = () => {
      calculateColumnsAndRows();
      restartGame();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    randomGrid = Array.from({ length: rowCount }, () =>
      Array.from({ length: columnCount }, () => (Math.random() > 0.7 ? 1 : 0)),
    );
    setGrid(randomGrid);

    const interval = setInterval(() => {
      setGrid((prevGrid: (0 | 1)[][]) => {
        return prevGrid.map((row: (0 | 1)[], x: number) =>
          row.map((cell: 0 | 1, y: number) => {
            const neighbors = [
              [-1, -1],
              [-1, 0],
              [-1, 1],

              [0, -1],
              //[0,0]
              [0, 1],

              [1, -1],
              [1, 0],
              [1, 1],
            ].reduce((acc, [dx, dy]) => {
              const newX = x + dx;
              const newY = y + dy;
              return acc + (prevGrid[newX]?.[newY] || 0);
            }, 0);

            if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
            if (cell === 0 && neighbors === 3) return 1;
            return cell;
          }),
        );
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Foreground Content */}
      <div
        className="absolute p-1 m-0 top-0 left-0 z-10  text-left"
        style={{
          background: "#fffbeb",
          border: `1px solid ${base}`,
          marginRight: `${cellSizeRow}px `,
          marginLeft: `${cellSizeRow}px`,
          marginBottom: `${cellSizeCol}px`,
          marginTop: `${cellSizeCol}px`,
          width: `${cellSizeCol * 6}px`,
          height: `${cellSizeRow * 3}px`,
        }}
      >
        <h1 className="text-4xl font-bold">Emre Kerman</h1>
      </div>

      <div
        className="absolute p-1 m-0  left-0 z-10  text-center"
        style={{
          top: `${cellSizeRow * 3}px`,
          background: "#fffbeb",
          border: `1px solid ${base}`,
          marginRight: `${cellSizeRow}px `,
          marginLeft: `${cellSizeRow}px`,
          marginBottom: `${cellSizeCol}px`,
          marginTop: `${cellSizeCol}px`,
          width: `${cellSizeCol * 6}px`,
          height: `${cellSizeRow * 1}px`,
        }}
      >
        <h2 className="text-1xl italic font-serif">Computer Engineer</h2>
      </div>

      <div
        className="absolute inset-0 w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(1px, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, minmax(1px, 1fr))`,
        }}
        onClick={restartGame}
      >
        {grid.flat().map((cell, index) => (
          <div
            key={index}
            style={{
              background: cell ? fg : bg,
              border: `1px solid ${base}`,
              // border: "1px solid #cdd6f4",

              // background: cell ? "#000" : "#fff",
              // border: "1px solid #000",
            }}
            // className={cell ? "bg-lime-300" : "catppuccin-mocha"}
          />
        ))}
      </div>
    </div>
  );
};

// function randomColor() {
//   return catppuccin[(Math.random() * catppuccin.length) | 0]; // Bitwise OR for faster rounding
// }
//
// function getWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//
//   useEffect(() => {
//     // Handler to call on window size changes
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//
//     // Add event listener for resize
//     window.addEventListener("resize", handleResize);
//
//     // Call handler immediately so state is up-to-date right away
//     handleResize();
//
//     // Remove the event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, [windowSize]); // Only run once
//
//   return windowSize;
// }

function calculateGround() {
  // const { width, height } = getWindowSize();
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width > height) {
    columnCount = Math.floor(width / cellSize);
    rowCount = Math.floor(height / cellSize);

    if (columnCount > maxCells) {
      const ratio = columnCount / maxCells; // Changed maxCount to maxCells
      columnCount = maxCells;
      rowCount = rowCount * ratio;
    }

    if (rowCount > maxCells) {
      const ratio = width / height;
      rowCount = maxCells;
      columnCount = Math.floor(columnCount * ratio);
    }

    cellSizeRow = height / rowCount;
    cellSizeCol = width / columnCount;
  } else {
    columnCount = Math.floor(width / cellSize);
    rowCount = Math.floor(height / cellSize);

    if (columnCount > maxCells) {
      const ratio = width / height;
      columnCount = maxCells;
      rowCount = Math.floor(rowCount * ratio);
    }

    if (rowCount > maxCells) {
      const ratio = rowCount / maxCells;
      rowCount = maxCells;
      columnCount = columnCount * ratio;
    }

    cellSizeRow = height / rowCount;
    cellSizeCol = width / columnCount;
  }
}

const Portfolio = () => {
  return (
    // { /* <div style={{ background: "#cdd5f4" }} onClick={restartGrid} // Add onClick to restart the game > */ }
    // { /*   <div */ }
    // { /*     className="fixed min-h-screen font-mono text-black" */ }
    // { /*     style={{ */ }
    // { /*       position: "fixed", */ }
    // { /*       color: "#0e1e2e", */ }
    // { /*       // background: "#cdd5f4", */ }
    // { /*       top: cellSizeCol / 2, */ }
    // { /*       left: cellSize / 2, */ }
    // { /*       // margin: "19px 20px 20px 20px", */ }
    // { /*       fontSize: cellSizeCol / 2, */ }
    // { /*       width: "99%", */ }
    // { /*       height: "9px", */ }
    // { /*     }} */ }
    // { /*   > */ }
    // { /*      <span>hehe</span>  */ }
    // { /*   </div> */ }
    <div
      onClick={restartGrid} // Add onClick to restart the game
      className="relative flex flex-col items-center justify-center  min-h-screen text-black  md:p-10 overflow-hidden"
      style={{ background: bg }}
      onResize={restartGrid}
    >
      <GameOfLife />
    </div>
  );
};

export default Portfolio;
