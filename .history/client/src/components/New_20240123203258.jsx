import React from 'react'
import add from "../assets/icons/Add.svg"

const New = ({text}) => {
  return (
    <div>
        <img src={add} alt="" />
        <span>Add {text}</span>
    </div>
  )
}

export default New