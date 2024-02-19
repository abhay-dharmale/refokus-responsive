import React from 'react'
import { LuMoveRight } from "react-icons/lu";

function Card({width, start, para, hover, title}) {
  return (
    <div className={` bg-neutral-800 p-5 rounded-xl ${width} min-h-[27rem] flex flex-col justify-between hover:px-6 transition-all ${hover ? "hover:bg-[#7443ff]" : "hover:bg-zinc-700"}`}>
      <div className='w-full'>
      <div className='w-full flex justify-between items-center'>
        <h3>Up Next: News</h3>
        <LuMoveRight />
      </div>
      <h1 className='text-3xl mt-5 font-semibold w-[75%]' dangerouslySetInnerHTML={{ __html: title ? title : "Let's get to it, <br/> together." }} />

      </div>
      <div className='down w-full'>
      {start === true && (
        <>
        <h1 className='text-7xl font-semibold tracking-tight leading-none'>start a project</h1>
        <button className='rounded-full py-2 px-5 border-[1px] border-zinc-400 mt-5'>Contact Us</button>
        </>
      )}
        {para === true && (
            <p className='text-zinc-400 font-semibold text-sm'>Explore what drives our team.</p>
        )}
        
      </div>
    </div>
  )
}

export default Card
