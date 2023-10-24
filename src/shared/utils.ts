import { SquareState } from "@/components/game-board";

export const initGrid = (rows: number, cols: number): SquareState[][] => {
  return Array.from(Array(rows), () => new Array(cols).fill(SquareState.Unknown));
}