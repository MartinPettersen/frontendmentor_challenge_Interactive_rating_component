import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import RatingCircle from './RatingCircle'

type Props = {}

const Rating = (props: Props) => {
    const [rating, setRating] = useState(0);
    const objects: any[]=[1,2,3,4,5];

  return (
    <article className="flex flex-col justify-evenly m-6">
        <span className="pl-7 p-4">

        <div className="rounded-full w-12 h-12  bg-[hsl(213,19%,18%)] flex items-center justify-center ">
            <Image width="16" height="16" src="/images/icon-star.svg" alt="star icon"/>
        </div>
        </span>
        <h2 className='font-bold text-[hsl(0,0%,100%)] text-[25px] pl-7 p-2 font-overpass'>
            How did we do?
        </h2>
        <p className='font-normal text-[hsl(217,12%,63%)] pl-7 text-[15px] p-4'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className='flex flex-row justify-evenly text-[hsl(217,12%,63%)] p-4'>
            {
            objects.map((obj,i) =>{
                return <RatingCircle content={obj} key={i} setRating={setRating} />
            })}
            
        </div>
        <div>
            <span className='flex justify-center items-center p-4'>
                <div className="flex content-center items-center justify-center w-[100%] h-[100%]">

                <Link className='w-[90%] h-[35px]  bg-orange-500 hover:text-orange-500   hover:bg-[hsl(0,0%,100%)]  rounded-full text-[hsl(0,0%,100%)] justify-center text-center place-items-center flex items-center '  href={{
            pathname: '//thankYou',
            query: { score: rating },
          }}>SUBMIT</Link>
                </div>
            </span>
        </div>
        </article>
  )
}

export default Rating