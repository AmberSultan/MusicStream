"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Collaborative Learning",
      description:
        "Join forces with fellow students, instructors, and musicians. Share your progress, exchange ideas, and create music together. Our platform fosters a collaborative environment that enhances creativity and helps you grow as an artist.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Learning
        </div>
      ),
    },
    {
      title: "Real-time Feedback",
      description:
        "Receive instant feedback from instructors as you practice and perform. With real-time guidance, you can correct mistakes on the spot, refine your techniques, and accelerate your progress. Stay in tune with your goals and keep improving.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Real-time Feedback
        </div>
      ),
    },
    {
      title: "Access to Resources",
      description:
        "Gain access to a wide range of learning materials, from sheet music and tutorials to practice tools and recordings. Our platform ensures that you have all the resources you need to master your instrument and enhance your musical knowledge.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Access to Resources
        </div>
      ),
    },
    {
      title: "Personalized Training",
      description:
        "Receive personalized lessons and training programs tailored to your musical interests and skill level. Whether you're a beginner or an advanced musician, our platform offers customized learning paths to help you achieve your musical aspirations.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Personalized Training
        </div>
      ),
    },
  ];
  

function ChooseUs() {
  return (
    <div className="none">
      <StickyScroll content={content} />
    </div>
  )
}

export default ChooseUs
