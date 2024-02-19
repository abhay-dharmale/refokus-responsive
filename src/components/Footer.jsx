import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto flex gap-10 pb-14'>
      {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((elem, index)=> <a key={index} className='text-sm text-zinc-500 font-semibold'>{elem}</a> )}
    </div>
  )
}

export default Footer
