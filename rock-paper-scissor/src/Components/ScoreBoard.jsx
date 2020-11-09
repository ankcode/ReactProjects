import React from "react"
import Score from './Score'

export default function ScoreBoard({player1, player2, player1_score, player2_score}) {
  return (
    <div className="score-board">
       <Score user={player1} score={player1_score}/>
       <Score user={player2} score={player2_score} />
    </div>
  )
}
