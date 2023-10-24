import { initGrid } from "@/shared/utils";
import { useState } from "react"

const BOARD_SIZE = 10;
export type Player = 'ME' | 'OPPONENT';
export type GameBoard = number[][];
export enum GamePhase {
  SET_UP = "SET_UP",
  PLAYING = "PLAYING",
  END = "END"
}

function initBoard(): GameBoard {
  return initGrid(BOARD_SIZE, BOARD_SIZE);
}

export default function Menu() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('ME');
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.SET_UP);
  const [myBoard, setMyBoard] = useState<GameBoard>(initBoard());
  const [opponentsBoard, setpponentsBoard] = useState<GameBoard>(initBoard());


  const handleFire = () => {
    setCurrentPlayer((player: Player) => {
      return player === 'ME' ? 'OPPONENT' : 'ME';
    })
  }
  
  return (
    <main>
      <h1>This is the GAME</h1>
      <p>Player: { currentPlayer }</p>
      <button onClick={handleFire}>Fire!</button>
      <section>
        <h2>My board</h2>
        {myBoard}
      </section>
      <section>
        <h2>Opponent&apos;s board</h2>
        {opponentsBoard}
      </section>
    </main>
  )
}

