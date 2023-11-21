import { GameBoardState, SquareState } from "@/shared/types";

export const BOARD_SIZE = 10;

export function initBoard(): GameBoardState {
  return initGrid(BOARD_SIZE, BOARD_SIZE);
}
export const initGrid = (rows: number, cols: number): SquareState[][] => {
  return Array.from(Array(rows), () => new Array(cols).fill(SquareState.Unknown));
}