import React, { createContext, useState } from "react"

export const MatchContext = createContext()

export const MatchProvider = (props) => {
  const [matchState, setMatchState] = useState({
    userScore: 0,
    computerScore: 0,
    result: "",
    mode: "",
  })

  const resetScore = () => {
    setMatchState({
      userScore: 0,
      computerScore: 0,
      result: "",
      mode: "user",
    })
    localStorage.removeItem("playerScore")
    localStorage.removeItem("computerScore")
  }

  const updateScore = (userScore, computerScore, result = "") => {
    setMatchState((prevState) => {
      return {
        ...prevState,
        userScore,
        computerScore,
        result,
      }
    })
    localStorage.setItem("playerScore", userScore)
    localStorage.setItem("computerScore", computerScore)
  }

  const updateMode = (mode) => {
    setMatchState((prevState) => {
      return {
        ...prevState,
        mode,
      }
    })
  }

  return (
    <MatchContext.Provider
      value={{ ...matchState, resetScore, updateScore, updateMode }}
    >
      {props.children}
    </MatchContext.Provider>
  )
}
