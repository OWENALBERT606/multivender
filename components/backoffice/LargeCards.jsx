import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
  const orderStats =[
    {
      period:"Todays orders",
      sales:1100000,
      color:"bg-blue-600"
    }, {
      period:"Yesterday's orders",
      sales:34000,
      color:"bg-green-600"
    }, {
      period:"This Month",
      sales:5939000,
      color:"bg-orange-600"
    },
    {
      period:"All time sales",
      sales:768900000,
      color:"bg-purple-600"
    }
  ]
  return (
<div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3 px-8 py-2       lg-grid-cols-3'>
        {/* card */}
        {
          orderStats.map((stat,i)=>{
            return(
              <LargeCard key={i} className="bg-green-600 flex items-center justify-center text-center flex-col gap-2 px-2 py-4" data={stat}/>
            )
          })
        }
    </div>
  )
}
