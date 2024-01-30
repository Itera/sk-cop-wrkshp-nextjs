import { GameBoardState, Player } from '@/shared/types'
import { useState } from 'react'
import styles from './Game.module.css'
import GameBoard from '@/components/GameBoard'

export interface GameInProgressProps {
  myBoard: GameBoardState
  opponentsBoard: GameBoardState
  onGameFinished: () => void
}

const GameInProgress = (props: GameInProgressProps) => {
  const { myBoard, opponentsBoard, onGameFinished } = props
  const [currentPlayer, setCurrentPlayer] = useState<Player>('ME')

  const handleFire = () => {
    setCurrentPlayer((player: Player) => {
      return player === 'ME' ? 'OPPONENT' : 'ME'
    })
  }

  return (
    <>
      <h2>Game in progress</h2>
      <p>Player: {currentPlayer}</p>
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

      <p>
        <button onClick={onGameFinished}>End game</button>
      </p>
    </>
  )
}

export default GameInProgress
