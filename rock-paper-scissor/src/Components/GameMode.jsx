import React from "react"

import { GAME_MODES } from "Constants"

export default function GameMode({ onClick }) {
  return (
    <div className="game-modes">
      {GAME_MODES.map(mode => (
        <p key={mode} className="game-mode" onClick={() => onClick(mode)}>
          {mode}
        </p>
      ))}
    </div>
  )
}
