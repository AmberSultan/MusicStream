import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

import Link from "next/link";

function HeroSection() {
  return (
    <div
    className='h-auto md:h-[40 rem] w-full rounded-md flex flex-col items-center
    justify-center relative overflow-hidden mx-auto py-10 md:py:0'
    >

<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="mt-40 heading p-4 z-10 relative w-full text-center ">

    <h1 className=' md:mt-0 text-4xl md:text-7xl
    font-bold bg-clip-text text-white bg-gradient-to-b
    form-neutral-50 to-neutral-400 '
    >Master the art of music</h1>
    <p className='mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto' 
    >Dive into the rhythms that move your soul and melodies that paint the sky with emotion.Experience soundscapes that blend the beauty of harmony with the power of expression.</p>


    <div className="mt-10">
        <Link href={"/courses"}>
            
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Explore courses
      </Button>
      
        </Link>

     
    </div>

      </div>

    </div>
  )
}

export default HeroSection
