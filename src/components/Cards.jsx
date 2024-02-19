import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 pb-8 flex-col sm:flex p-4 sm:gap-1 sm:mt-20'>
        <Card width={"basis-1/3"} start={false} para={true} title={"Insights and behind the scenes"}/>
        <Card width={"basis-2/3"} start={true} para={false} hover={true}  />
      </div>
    </div>
  )
}

export default Cards
