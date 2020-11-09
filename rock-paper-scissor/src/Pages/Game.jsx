import { useContext, useState, useEffect } from "react"
import {
  ActionMessage,
  Header,
  ScoreBoard,
  Weapons,
  Outcome,
  Confetti,
  Modal,
  GameMode
} from "Components"
import { GAME_RULES } from "Constants"
import { MatchContext } from "Contexts"

function Game() {
  const {
    updateScore,
    resetScore,
    userScore,
    result,
    computerScore,
    updateMode
  } = useContext(MatchContext)
  const [playerWins, setPlayerWins] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const playerScore = localStorage.getItem("playerScore")
    const computerScore = localStorage.getItem("computerScore")
    if (playerScore && computerScore) {
      updateScore(parseInt(playerScore), parseInt(computerScore))
    }
  }, [])

  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  const handleGameModes = (value) => {
    console.log(value)
     updateMode(value)
  }
  const playMatch = (userWeapon) => {
    const computerWeapon = getComputerWeapon()
    const outcome = compareHands(userWeapon, computerWeapon)
    updateScore(
      outcome.tempUserScore,
      outcome.tempComputerScore,
      outcome.result
    )
    setPlayerWins(outcome.playerWins)
  }

  const getComputerWeapon = () => {
    const possibleChoices = Object.keys(GAME_RULES)
    const index = Math.floor(Math.random() * possibleChoices.length)
    const selectedWeapon = possibleChoices[index]
    return selectedWeapon
  }

  const compareHands = (userWeapon, computerWeapon) => {
    let result = ""
    let tempUserScore = userScore
    let tempComputerScore = computerScore
    let playerWins = false
    if (computerWeapon === userWeapon) {
      result = "Its a draw"
    } else if (computerWeapon in GAME_RULES[userWeapon]) {
      result = `You Win: ${userWeapon}  ${GAME_RULES[userWeapon][computerWeapon]} ${computerWeapon}.`
      tempUserScore += 1
      playerWins = true
    } else {
      result = `Computer Wins: ${computerWeapon} ${GAME_RULES[computerWeapon][userWeapon]} ${userWeapon}.`
      tempComputerScore += 1
    }

    return { tempUserScore, tempComputerScore, playerWins, result }
  }

  return (
    <div>
      <Header
        title={"Rock Paper Scissors"}
        onReset={() => resetScore()}
        
      />
      <ScoreBoard
        player1={"You"}
        player2={"Computer"}
        player1_score={userScore}
        player2_score={computerScore}
      />

      <ActionMessage title="Make your move" />
      <Weapons onClick={playMatch} />
      <Outcome status={result} />
      <Confetti active={playerWins} />
      <Modal show={show} handleClose={closeModal}>
      <GameMode onClick={handleGameModes}/>
      </Modal>
    </div>
  )
}

export default Game
