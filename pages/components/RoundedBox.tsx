import React from 'react'
import Rating from './Rating'

type Props = {}

const RoundedBox = (props: Props) => {
  
  return (
    <div className="rounded-3xl flex items-center  w-[400px] h-[400px] bg-gradient-to-b from-[hsl(213,19%,18%)] to-[hsl(216, 12%, 54%)]">
      <Rating />
      
    </div>
  )
}

export default RoundedBox