export type Player = 'ME' | 'OPPONENT';
export enum GamePhase {
  SET_UP = "SET_UP",
  PLAYING = "PLAYING",
  END = "END"
}

export enum SquareState {
  Unknown,
  Boat,
  Empty,
}

export type GameBoardState = SquareState[][];