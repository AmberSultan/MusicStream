
'use client';

import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from "./ui/background-gradient";


interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {

   const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className='mt-40 py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h1 className='mt-4 text-base text-teal-600 font-semibold uppercase'>FEATURED COURSES </h1>
                <p className='text-white mt-10 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Learn With the Best</p>
            </div>
        </div>
        <div className='mt-10'>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center justify-center text-white">
                    {featuredCourses.map((course:Course) => (

                        <div key={course.id} className=" flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                         <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className='text-lg'>{course.title}</p>
                            <p className='mt-4 text-left text-sm'>{course.description}</p>
                            <Link href={`/courses/${course.slug}`}>
                            
                            <button className="mt-10 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`Learn More`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
                            </Link>
                        </div>
                            </BackgroundGradient>
                        </div>
                        
                    ))}
            </div>
        </div>
        <div className='mt-20 text-center text-white'>
            <Link href={"/courses"}>
            {/* View All Courses */}
            <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-gray-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          View All Courses
        </div>
      </button>
            </Link>
        </div>
      
    </div>
  )
}

export default FeaturedCourses
