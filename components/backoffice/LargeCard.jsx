import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg text-white flex flex-col py-4 px-2 gap-2 justify-center items-center shadow-md ${data.color}`}>
        <Layers/>
        <h4>{data.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>UGX.{data.sales}</h2>

    </div>
  )
}
