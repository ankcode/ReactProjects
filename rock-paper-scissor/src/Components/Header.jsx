import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import Button from "./Button"
import { MatchContext } from "Contexts"

function Header({ title }) {
  const { mode, resetScore, updateMode } = useContext(MatchContext)
  const history = useHistory()

  const handleReset = () => {
    resetScore()
  }

  const handleNewGame = () => {
    updateMode("")
    resetScore()
    history.push("/")
  }

  return (
    <header className="app-header">
      {mode && <Button title="Reset Game" onClick={handleReset} />}
      <h3>{title}</h3>
      {mode && <Button title="New Game" onClick={handleNewGame} />}
    </header>
  )
}

export default Header
