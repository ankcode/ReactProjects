import React from "react"

import { Button } from "Components"
import Match_Helpers from "Utils"

export default function ComputerPlayer({
  playMatch,
  playerWeapon,
  opponentWeapon,
}) {
  const handlePlay = () => {
    const computerWeapon = Match_Helpers.getComputerWeapon()
    setTimeout(() => {
      playMatch(computerWeapon)
    }, 1000)
  }

  return (
    <div>
      <div className="hands">
        <i className={`fa fa-hand-${playerWeapon}-o player-hand`}></i>
        <i className={`fa fa-hand-${opponentWeapon}-o opponent-hand`}></i>
      </div>
      <Button title="Play" onClick={handlePlay} />
    </div>
  )
}
