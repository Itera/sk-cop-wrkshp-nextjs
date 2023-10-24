import { GameBoardState, SquareState } from '@/shared/types';
import styles from './GameBoard.module.css'

interface GameBoardProps {
  grid2D: GameBoardState;
  renderSquare?: (tile: SquareState) => JSX.Element;
}

const GameBoard = ({ grid2D, renderSquare }: GameBoardProps) => {
  return (
    <div className={styles.grid}>
      {grid2D.map((row, rowIndex) => row.map((cell, cellIndex) => (
          <div key={`${rowIndex}${cellIndex}`} className={styles.cell}>
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
