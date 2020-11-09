import Confetti from 'react-dom-confetti';

const config = {
  angle: 190,
  spread: 360,
  startVelocity: 40,
  elementCount: 200,
  dragFriction: 0.12,
  duration: 1000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default function ({active}){
    return <Confetti active={ active } config={ config }/>
}
