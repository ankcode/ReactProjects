import { GAME_RULES } from "Constants"

export default function Weapons({ onClick }) {
  return (
    <div className="weapons-container">
      {Object.keys(GAME_RULES).map((weapon) => (
        <i
          key={weapon}
          className={`fa fa-hand-${weapon}-o weapon`}
          aria-hidden="true"
          onClick={() => onClick(weapon)}
        ></i>
      ))}
    </div>
  )
}
