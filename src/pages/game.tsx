import { useState } from "react"

const BoardSize = 10;
export type Player = 'ME' | 'OPPONENT';
export type GameState = boolean[][]; // TODO not boolean

function initBoard(): GameState {
  const board: GameState = [];

  for (let i = 0; i < BoardSize; i++) {
    const row: boolean[] = [];
    for (let j = 0; j < BoardSize; j++) {
      row.push(false);
    }
    board.push(row);
  }

  return board;
}

export default function Menu() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('ME');
  const [myBoard, setMyBoard] = useState<GameState>(initBoard());
  const [opponentsBoard, setpponentsBoard] = useState<GameState>(initBoard());


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
        [...]
      </section>
      <section>
        <h2>Opponent&apos;s board</h2>
        [...]
      </section>
    </main>
  )
}

