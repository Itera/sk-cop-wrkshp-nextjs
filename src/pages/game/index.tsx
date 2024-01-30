import { GameBoardState, GamePhase } from '@/shared/types'
import { useState } from 'react'
import { initBoard } from '@/shared/utils'
import GameSetup from './GameSetup'
import GameInProgress from './GameInProgress'

export default function Menu() {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.SET_UP)
  const [myBoard, setMyBoard] = useState<GameBoardState>(initBoard())
  const [opponentsBoard, setOpponentsBoard] =
    useState<GameBoardState>(initBoard())

  const handleSetupFinished = (myNewBoard: GameBoardState) => {
    setMyBoard(myNewBoard)
    setGamePhase(GamePhase.PLAYING)
  }

  return (
    <main>
      <h1>This is the GAME</h1>
      {gamePhase === GamePhase.SET_UP && (
        <GameSetup onSetupFinished={handleSetupFinished} />
      )}
      {gamePhase === GamePhase.PLAYING && (
        <GameInProgress
          myBoard={myBoard}
          opponentsBoard={opponentsBoard}
          onGameFinished={() => setGamePhase(GamePhase.END)}
        />
      )}
      {gamePhase === GamePhase.END && <>The end.</>}
    </main>
  )
}
