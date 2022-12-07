import React from "react";
import Image from 'next/image'
import { useRouter } from "next/router";

type Props = {};

const thankYou = (props: Props) => {
    const router = useRouter();
    const query = router.query;
    const score = query.score;


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[hsl(216,12%,8%)]">
      <div className="rounded-3xl flex items-center  w-[400px] h-[400px] bg-gradient-to-b from-[hsl(213,19%,18%)] to-[hsl(216, 12%, 54%)]">
        <article className="flex flex-col justify-evenly m-6">
          <span className=" p-4">
            <div className="flex items-center  justify-center ">
                <Image src="/images/illustration-thank-you.svg" width={200} height={200} alt="a thank you illustration"/>
            </div>
          </span>
          <div className=" flex justify-center items-center pt-2 ">
            <p className="w-[60%]  bg-[hsl(213,19%,18%)] text-orange-400 rounded-full text-center">
                You selected {score} out of 5
            </p>
          </div>
          <h2 className="font-bold text-[hsl(0,0%,100%)] text-[25px]  pt-3 font-overpass text-center">
            Thank You!
          </h2>
          <p className="font-normal text-[hsl(217,12%,63%)]  text-[15px]  text-center">
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
          <div className="flex flex-row justify-evenly text-[hsl(217,12%,63%)] p-4">
            
          </div>
          
        </article>
      </div>
    </div>
  );
};

export default thankYou;
