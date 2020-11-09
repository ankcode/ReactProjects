

export default function Score({ user, score }) {
  return (
    <div className="score-container">
      <div className="user">{user}</div>
      <div className="score">{score}</div>
    </div>
  )
}
