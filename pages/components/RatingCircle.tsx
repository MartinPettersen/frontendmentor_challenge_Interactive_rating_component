import React from 'react'

type Props = {
    content: any;
    setRating: Function;
}

const RatingCircle = ({content, setRating}: Props) => {
  return (
    <button onClick={() => setRating(content)} className="rounded-full w-12 h-12 bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] focus:text-[hsl(0,0%,100%)] hover:bg-orange-500 hover:text-[hsl(0,0%,100%)]  flex items-center justify-center">{content}</button>
  )
}

export default RatingCircle