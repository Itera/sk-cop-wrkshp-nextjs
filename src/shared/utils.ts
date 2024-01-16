import { GameBoardState, SquareState } from "@/shared/types";

export const BOARD_SIZE = 10;

export function initBoard(fill = SquareState.Unknown): GameBoardState {
  return initGrid(BOARD_SIZE, BOARD_SIZE, fill);
}
export const initGrid = (rows: number, cols: number, fill: SquareState): SquareState[][] => {
  return Array.from(Array(rows), () => new Array(cols).fill(fill));
}