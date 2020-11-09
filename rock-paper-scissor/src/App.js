import { useState } from "react"
import "./App.css"

import { Game } from "Pages"
import { MatchProvider } from "Contexts"

function App() {
  return (
    <MatchProvider>
      <div className="App">
        <Game />
      </div>
    </MatchProvider>
  )
}

export default App
