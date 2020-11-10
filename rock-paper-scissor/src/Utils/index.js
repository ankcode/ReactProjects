import { GAME_RULES } from "Constants"

const Match_Helpers = {
  compareHands: (playerScore, opponentScore, playerWeapon, opponentWeapon) => {
    let result = ""
    let tempPlayerScore = playerScore
    let tempOpponentScore = opponentScore
    let playerWins = false
    if (opponentWeapon === playerWeapon) {
      result = "Its a draw"
    } else if (opponentWeapon in GAME_RULES[playerWeapon]) {
      result = `You Win: ${playerWeapon}  ${GAME_RULES[playerWeapon][opponentWeapon]} ${opponentWeapon}.`
      tempPlayerScore += 1
      playerWins = true
    } else {
      result = `Opponent Wins: ${opponentWeapon} ${GAME_RULES[opponentWeapon][playerWeapon]} ${playerWeapon}.`
      tempOpponentScore += 1
    }

    return { tempPlayerScore, tempOpponentScore, playerWins, result }
  },
  getComputerWeapon: () => {
    const possibleWeapons = Object.keys(GAME_RULES)
    const index = Math.floor(Math.random() * possibleWeapons.length)
    const selectedWeapon = possibleWeapons[index]
    return selectedWeapon
  },
}

export default Match_Helpers
