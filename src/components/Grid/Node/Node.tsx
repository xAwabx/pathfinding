"use client";
import { FC, useState } from "react";

interface Node {
  x: number;
  y: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  g: number;
  h: number;
}
interface NodeProps {
  node: Node;
  setGrid: any;
  grid: Node[][];
}

const Node: FC<NodeProps> = ({ node, grid }) => {
  //   const calcH = (): number => {
  //     const nodeX = node.x;
  //     const nodeY = node.y;
  //     const endX = 7;
  //     const endY = 7;

  //     return Math.floor(
  //       Math.sqrt((nodeX - endX) ** 2 + (nodeY - endY) ** 2) * 10
  //     );
  //   };
  //   const calcG = (): number => {
  //     const nodeX = node.x;
  //     const nodeY = node.y;
  //     const startX = 2;
  //     const startY = 2;

  //     return Math.floor(
  //       Math.sqrt((nodeX - startX) ** 2 + (nodeY - startY) ** 2) * 10
  //     );
  //   };

  //   //node to end
  //   const [h, setH] = useState<number>(calcH());
  //   //node to start
  //   const [g, setG] = useState<number>(calcG());
  const f = node.g + node.h;

  const setStart = () => {
    null;
  };
  const setEnd = () => {
    null;
  };

  return (
    <div
      onClick={setStart}
      className={`relative h-[6vh] w-[6vh] bg-white rounded-md ${
        node.isStart
          ? "bg-green-400"
          : node.isEnd
          ? "bg-red-600"
          : node.isWall && "bg-gray-600"
      }`}
    >
      {!node.isStart && !node.isEnd && (
        <div>
          <h1 className="absolute top-1 left-1 text-black text-[1.5vh]">
            {node.g}
          </h1>
          <h1 className="absolute top-1 right-1 text-black text-[1.5vh]">
            {node.h}
          </h1>
          <h1 className="absolute bottom-[0.5px] left-[50%] translate-x-[-50%] text-black font-bold">
            {f}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Node;
