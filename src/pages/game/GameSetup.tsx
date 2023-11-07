import GameBoard from "@/components/GameBoard";
import { GameBoardState, SquareState } from "@/shared/types"
import styles from './Game.module.css';
import { useState } from "react";
import { initBoard } from "@/shared/utils";

export interface GameSetupProps {
  initialBoard: GameBoardState,
  onSetupFinished: (myNewBoard: GameBoardState) => void;
}

const GameSetup = ({ initialBoard, onSetupFinished }: GameSetupProps) => {
  const [newBoard, setNewBoard] = useState<GameBoardState>(initBoard());
  const handleBoatDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', 'boat');
  };

  const handleBoatDrop = (rowIndex: number, colIndex: number) => {
    console.log("Boat dropped at:", rowIndex, colIndex);
    const updatedGrid = [...newBoard];
    updatedGrid[rowIndex][colIndex] = SquareState.Boat;
    setNewBoard(updatedGrid);

  };

  return (
    <>
      <h2>Place your ships:</h2>
      <div className={styles.boat} draggable onDragStart={handleBoatDragStart}>
      </div>

      <div className={styles.gameArea}>
        <section className={styles.gameAreaBoard}>
          <GameBoard grid2D={initialBoard} handleDrop={handleBoatDrop} />
        </section>
      </div>
      <button onClick={() => onSetupFinished(initialBoard)}>Done</button>
    </>
  )
};

export default GameSetup;