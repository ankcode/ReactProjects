import React from "react"

import { ActionMessage, Weapons } from "Components"
export default function UserPlayer({ playMatch }) {
  return (
    <div>
      <ActionMessage title="Make your move" />
      <Weapons onClick={playMatch} />
    </div>
  )
}
