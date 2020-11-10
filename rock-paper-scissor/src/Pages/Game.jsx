import { useContext, useState } from "react"
import { useLocation } from "react-router"
import {
  ScoreBoard,
  Outcome,
  Confetti,
  UserPlayer,
  ComputerPlayer,
} from "Components"
import { MatchContext } from "Contexts"
import Match_Helpers from "Utils"

function Game() {
  const { updateScore, playerScore, result, opponentScore } = useContext(
    MatchContext
  )
  const [hands, setHands] = useState({
    playerWeapon: "rock",
    opponentWeapon: "rock",
  })
  const [playerWins, setPlayerWins] = useState(false)

  const location = useLocation()

  const playMatch = (playerWeapon) => {
    const opponentWeapon = Match_Helpers.getComputerWeapon()
    setHands({ playerWeapon, opponentWeapon })
    const outcome = Match_Helpers.compareHands(
      playerScore,
      opponentScore,
      playerWeapon,
      opponentWeapon
    )
    updateScore(
      outcome.tempPlayerScore,
      outcome.tempOpponentScore,
      outcome.result
    )
    setPlayerWins(outcome.playerWins)
  }

  return (
    <div>
      <ScoreBoard
        player1={location.state.mode}
        player2={"Opponent"}
        player1_score={playerScore}
        player2_score={opponentScore}
      />
      {location.state.mode === "You" ? (
        <UserPlayer playMatch={playMatch} />
      ) : (
        <ComputerPlayer
          playMatch={playMatch}
          playerWeapon={hands.playerWeapon}
          opponentWeapon={hands.opponentWeapon}
        />
      )}
      <Outcome status={result} />
      <Confetti active={playerWins} />
    </div>
  )
}

export default Game
