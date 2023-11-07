import { GameBoardState, SquareState } from '@/shared/types';
import styles from './GameBoard.module.css'
import React from "react";

interface GameBoardProps {
  grid2D: GameBoardState;
  renderSquare?: (tile: SquareState) => JSX.Element;
  handleDrop?: (rowIndex: number, colIndex: number) => void;
}

const GameBoard = ({ grid2D, renderSquare, handleDrop }: GameBoardProps) => {

  const onDrop = (event: React.DragEvent<HTMLDivElement>, rowIndex: number, colIndex: number) => {
    event.preventDefault();
    if (handleDrop) {
      handleDrop(rowIndex, colIndex);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.grid}>
      {grid2D.map((row, rowIndex) => row.map((cell, cellIndex) => (
          <div key={`${rowIndex}${cellIndex}`}
               className={styles.cell}
               onDrop={(event) => onDrop(event, rowIndex, cellIndex)}
               onDragOver={onDragOver}>
            {renderSquare ? renderSquare(cell) : defaultSquareRenderer(cell)}
          </div>
        ))
      )}
    </div>
  );
}

export const defaultSquareRenderer = (tile: SquareState) => {
  switch(tile) {
    case SquareState.Unknown: return (<div className={styles.unknown}></div>);
    case SquareState.Water: return (<div className={styles.water}></div>);
    case SquareState.Boat: return (<div className={styles.boat}></div>);
    default: return (<div className={styles.unknown}></div>);
  }
}

export default GameBoard
