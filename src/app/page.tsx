"use client";
import Node from "@/components/Grid/Node/Node";
import { useState } from "react";

interface NodeType {
  x: number;
  y: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  g: number;
  h: number;
}
//(x,y)
const START = [9, 9];
//(x,y)
const END = [2, 2];
const createGrid = (rows: number, cols: number) => {
  const grid: NodeType[][] = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      //setting hard coded start and end points
      currentRow.push({
        x: col,
        y: row,
        isStart: row === START[1] && col === START[0] ? true : false,
        isEnd: row === END[1] && col === END[0] ? true : false,
        isWall: false,
        g: Math.floor(
          Math.sqrt((row - START[0]) ** 2 + (col - START[1]) ** 2) * 10
        ),
        h: Math.floor(
          Math.sqrt((row - END[0]) ** 2 + (col - END[1]) ** 2) * 10
        ),
      });
    }
    grid.push(currentRow);
  }
  return grid;
};

export default function Home() {
  const [grid, setGrid] = useState<NodeType[][]>(createGrid(12, 12));
  const startAlg = () => {
    let current = grid[START[1]][START[0]];
    let currentF = current.g + current.h;
    let neighbors = [grid[current.y + 1][current.x]];
    console.log(neighbors);
  };

  return (
    <main className="bg-slate-800 h-[100vh] w-[100vw] flex flex-row justify-center items-center gap-20">
      <div className="h-fit w-fit bg-purple-500 grid grid-flow-row-dense grid-cols-12 gap-2 items-center p-4 rounded-sm">
        {grid.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <Node
                node={grid[rowIndex][colIndex]}
                setGrid={setGrid}
                grid={grid}
              />
            );
          });
        })}
      </div>
      <div>
        <button onClick={startAlg} className="bg-white p-2 rounded-lg">
          Step
        </button>
      </div>
    </main>
  );
}
