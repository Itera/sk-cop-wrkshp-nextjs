import GameBoard from "@/components/GameBoard";
import { GameBoardState, SquareState } from "@/shared/types"
import styles from './Game.module.css';
import { useState } from "react";
import { initBoard } from "@/shared/utils";

export interface GameSetupProps {
  onSetupFinished: (myNewBoard: GameBoardState) => void;
}

const GameSetup = ({ onSetupFinished }: GameSetupProps) => {
  const [newBoard, setNewBoard] = useState<GameBoardState>(initBoard(SquareState.Water));

  const handleBoatDragStart = (event: React.DragEvent<HTMLDivElement>, boatSize: number) => {
    event.dataTransfer.setData('text/plain', ''+boatSize);
  };

  const handleBoatDrop = (rowIndex: number, colIndex: number, event: { dataTransfer: { getData: (format: string) => any; }; }) => {
    const boatSizeToDrop = event.dataTransfer.getData('text/plain')
    console.log("Boat dropped at:", rowIndex, colIndex, boatSizeToDrop);
    // TODO - what to do with info WHERE the drop happened and WHAT KIND of boat it was
    // so far it paints one square
    const updatedGrid = [...newBoard];
    updatedGrid[rowIndex][colIndex] = SquareState.Boat;
    setNewBoard(updatedGrid);
  };

  return (
    <>
      <h2>Place your ships:</h2>
      <ul className={styles.shipSelector}>
        <li><div draggable onDragStart={(ev) => handleBoatDragStart(ev, 5)} >5 square ship</div></li>
        <li><div draggable onDragStart={(ev) => handleBoatDragStart(ev, 4)} >4 square ship</div></li>
        <li><div draggable onDragStart={(ev) => handleBoatDragStart(ev, 3)} >3 square ship</div></li>
        <li><div draggable onDragStart={(ev) => handleBoatDragStart(ev, 3)} >3 square ship</div></li>
        <li><div draggable onDragStart={(ev) => handleBoatDragStart(ev, 2)} >2 square ship</div></li>
      </ul>

      

      <div className={styles.gameArea}>
        <section className={styles.gameAreaBoard}>
          <GameBoard grid2D={newBoard} handleDrop={handleBoatDrop} />
        </section>
      </div>
      <button onClick={() => onSetupFinished(newBoard)}>Done</button>
    </>
  )
};

export default GameSetup;