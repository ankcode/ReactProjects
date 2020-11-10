import React, { createContext, useState, useEffect } from "react"

export const MatchContext = createContext()

export const MatchProvider = (props) => {
  const [matchState, setMatchState] = useState({
    playerScore: 0,
    opponentScore: 0,
    result: "",
    mode: "",
  })

  useEffect(() => {
    const mode = localStorage.getItem("mode")
    const playerScore = localStorage.getItem("playerScore")
    const opponentScore = localStorage.getItem("opponentScore")

    if (mode) {
      setMatchState((prevState) => {
        return {
          ...prevState,
          mode,
        }
      })
    }
    if (playerScore && opponentScore) {
      setMatchState((prevState) => {
        return {
          ...prevState,
          playerScore: parseInt(playerScore),
          opponentScore: parseInt(opponentScore),
          result: "",
        }
      })
    }
  }, [])

  const resetScore = () => {
    setMatchState((prevState) => {
      return {
        ...prevState,
        playerScore: 0,
        opponentScore: 0,
        result: "",
      }
    })
    localStorage.removeItem("playerScore")
    localStorage.removeItem("opponentScore")
  }

  const updateScore = (playerScore, opponentScore, result = "") => {
    setMatchState((prevState) => {
      return {
        ...prevState,
        playerScore,
        opponentScore,
        result,
      }
    })
    localStorage.setItem("playerScore", playerScore)
    localStorage.setItem("opponentScore", opponentScore)
  }

  const updateMode = (mode) => {
    setMatchState((prevState) => {
      return {
        ...prevState,
        mode,
      }
    })
    localStorage.setItem("mode", mode)
  }

  return (
    <MatchContext.Provider
      value={{ ...matchState, resetScore, updateScore, updateMode }}
    >
      {props.children}
    </MatchContext.Provider>
  )
}
