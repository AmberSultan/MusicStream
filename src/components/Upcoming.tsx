"use client";

import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'

function Upcoming() {
  return (

    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center">
                <h1 className='mt-4 text-base text-teal-600 font-semibold uppercase'>FEATURED WEBINAR</h1>
                <p className='text-white mt-10 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Enhace Your Musical Journey</p>
            </div>

        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
        </div>
        <div className='mt-10 text-center text-white'>
            <Link href={"/webinar"}>
            {/* View All Courses */}
            <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-gray-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          View All Webinars
        </div>
      </button>
            </Link>
        </div>
  </div>


  )
}

export const projects = [
    {
      title: "The Future of Music Streaming",
      description:
        "Explore the latest advancements in music streaming technology and how it’s shaping the future of the music industry.",
      link: "https://musicstreaming.com",
    },
    {
      title: "Innovative Music Production Techniques",
      description:
        "Join industry experts as they discuss cutting-edge techniques in music production and how to leverage new tools and technologies.",
      link: "https://musicproduction.com",
    },
    {
      title: "The Evolution of Digital Music Distribution",
      description:
        "Learn about the evolution of digital music distribution and its impact on artists and the industry.",
      link: "https://digitalmusicdistribution.com",
    },
    {
      title: "Music Licensing and Copyright Essentials",
      description:
        "Understand the fundamentals of music licensing and copyright, and how to protect your intellectual property.",
      link: "https://musiclicensing.com",
    },
    {
      title: "The Role of AI in Music Creation",
      description:
        "Discover how artificial intelligence is being used to create new music and revolutionize the creative process.",
      link: "https://aimusiccreation.com",
    },
    {
      title: "Trends in Live Music and Virtual Concerts",
      description:
        "Explore the latest trends in live music performances and virtual concerts, and how they are transforming the concert experience.",
      link: "https://livemusictrends.com",
    },
  ];
  

export default Upcoming
