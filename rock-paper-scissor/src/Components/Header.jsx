import React from "react"

import Button from "./Button"


function Header({ title, onReset, onNewGame }) {
  return (
    <header className="app-header">
      
      <h3>{title}</h3>
      <Button title="Reset Game" onClick={onReset} />
      
    </header>
  )
}

export default Header
