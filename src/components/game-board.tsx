
export enum SquareState {
  Unknown,
  Boat,
  Empty,
}
export type GameBoardState = SquareState[][];
export interface GameBoardProps {
  state: GameBoardState;
}

export default function GameBoard({ state }: GameBoardProps) {
  return (
    <table>
      <tbody>
        {state.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}