import React from 'react'
import game from "../assets/icons/game.svg"

const GameCard = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <img src={game} alt="" />
            <div>

            </div>
        </div>

        See in map
    </div>
  )
}

export default GameCard