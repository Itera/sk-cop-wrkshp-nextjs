import GameBoard from "@/components/GameBoard";
import { GameBoardState, GamePhase, Player } from "@/shared/types";
import { initGrid } from "@/shared/utils";
import { useState } from "react"
import styles from './Game.module.css'

const BOARD_SIZE = 10;


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
      <div className={styles.gameArea}>
        <section className={styles.gameAreaBoard}>
          <h2>My board</h2>
          <GameBoard grid2D={myBoard} />
        </section>
        <section className={styles.gameAreaBoard}>
          <h2>Opponent&apos;s board</h2>
          <GameBoard grid2D={opponentsBoard} />
        </section>
      </div>
    </main>
  )
}

