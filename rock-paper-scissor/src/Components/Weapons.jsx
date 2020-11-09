
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa"

export default function Weapons({onClick}) {
    return (
        <div className="weapons-container">
        <FaHandPaper className="weapon" onClick={() => onClick('paper')} />
        <FaHandRock className="weapon" onClick={() => onClick('rock')} />
        <FaHandScissors className="weapon" onClick={() => onClick('scissors')} />
      </div>
    )
}
