import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[20%] px-5 py-3 h-[9vh] border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between font-semibold'>
      <img  src={val.url} />
      <span>{val.number}</span> 
    </div>
  )
}

export default Stripe
