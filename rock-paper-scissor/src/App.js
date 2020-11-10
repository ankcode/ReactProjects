import { Switch, Route } from "react-router-dom"
import "./App.css"

import { Game, Home } from "Pages"
import { Header } from "Components"
import { MatchProvider } from "Contexts"

function App() {
  return (
    <MatchProvider>
      <div className="app">
        <Header title={"Rock Paper Scissors"} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={Game} />
        </Switch>
      </div>
    </MatchProvider>
  )
}

export default App
