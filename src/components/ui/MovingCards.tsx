"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function MovingCards() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-white mt-10 text-4xl leading-8 font-extrabold tracking-tight sm:text-4xl">Hear our Harmony : Voices of success</h2>
        <div>
        <div className="mt-10">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
      </div>
    </div>
    </div>
  )
}

const testimonials = [
    {
      quote:
        "And in the end, the love you take is equal to the love you make.",
      name: "The Beatles",
      title: "The End",
    },
    {
      quote:
        "We will, we will rock you!",
      name: "Queen",
      title: "We Will Rock You",
    },
    {
      quote: "Like a rolling stone, like a rolling stone.",
      name: "Bob Dylan",
      title: "Like a Rolling Stone",
    },
    {
      quote:
        "I see trees of green, red roses too. I see them bloom for me and you. And I think to myself, what a wonderful world.",
      name: "Louis Armstrong",
      title: "What a Wonderful World",
    },
    {
      quote:
        "Cause baby you're a firework, come on show 'em what you're worth.",
      name: "Katy Perry",
      title: "Firework",
    },
  ];
  

export default MovingCards
