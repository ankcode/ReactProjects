import React, { useContext } from "react"
import { useHistory } from "react-router-dom";
import { GameMode, ActionMessage } from "Components"
import { MatchContext } from "Contexts"

export default function Home() {
  const { updateMode } = useContext(MatchContext)
  const history = useHistory();
  const startGame = (value) => {
    
    updateMode(value)
    history.push({pathname: '/game', state: {mode: value}});
   
  }
  return (
    <div>
      <ActionMessage title={"Start a New Game"} />

      <div className="game-modes__container">
        <ActionMessage title={"Choose your player"} />

        <GameMode onClick={startGame} />
        <ActionMessage title={"vs Computer"} />
      </div>
    </div>
  )
}
