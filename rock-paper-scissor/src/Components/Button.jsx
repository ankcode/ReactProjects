import React from 'react'

export default function Button({title, onClick}) {
    return (
        <div >
          <button className="button" onClick={onClick}>{title}</button>
       </div>
    )
}
