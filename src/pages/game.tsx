import GameBoard, { GameBoardState } from "@/components/game-board";
import { initGrid } from "@/shared/utils";
import { useState } from "react"

const BOARD_SIZE = 10;
export type Player = 'ME' | 'OPPONENT';
export enum GamePhase {
  SET_UP = "SET_UP",
  PLAYING = "PLAYING",
  END = "END"
}

function initBoard(): GameBoardState {
  return initGrid(BOARD_SIZE, BOARD_SIZE);
}

export default function Menu() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('ME');
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.SET_UP);
  const [myBoard, setMyBoard] = useState<GameBoardState>(initBoard());
  const [opponentsBoard, setpponentsBoard] = useState<GameBoardState>(initBoard());


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
        <GameBoard state={myBoard} />
      </section>
      <section>
        <h2>Opponent&apos;s board</h2>
        <GameBoard state={opponentsBoard} />
      </section>
    </main>
  )
}

