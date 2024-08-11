"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    
       <div className="h-[40rem] w-full   relative flex flex-col items-center justify-center antialiased bg-black">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="mt-16 relative z-10 text-lg md:text-7xl  bg-clip-text text-white  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-5">
  Have questions about our music courses or need support? Reach out to us!
  We are here to help with any inquiries about lessons, scheduling, or general
  information. Contact us today and lets make music together.
</p>

        <input
          type="text"
          placeholder="Your Email Address"
          className="px-3 py-3 text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />

<textarea
  className="w-full h-32 p-4 text-white rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
  placeholder="Write your message here..."
></textarea>


      </div>
      <BackgroundBeams />
    </div>
   
  )
}

export default page
