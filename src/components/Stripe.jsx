import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[100%] sm:w-[20%] px-3 py-1 sm:px-5 sm:py-3 h-[8vh] sm:h-[9vh] border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between font-semibold'>
      <img className='' src={val.url} />
      <span className=''>{val.number}</span> 
    </div>
  )
}

export default Stripe
