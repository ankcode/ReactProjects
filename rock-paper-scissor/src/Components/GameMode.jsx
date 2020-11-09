import React from 'react'
 

export default function GameMode({onClick}) {
    return (
       <div className="game-modes">
        <p className="game-mode" onClick={() =>onClick('user')}>You vs Computer</p>
        <p className="game-mode" onClick={() =>onClick('computer')}>Computer vs Computer</p>
      </div>
    )
}
