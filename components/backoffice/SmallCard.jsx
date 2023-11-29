import { Layers, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function SmallCard({data}) {
  const {
    title,
      number,
      iconbg,
      icon:Icon}=data
  return (
    <div className="rounded-lg bg-slate-700 text-white flex justify-start items-center shadow-lgpx-2 py-2">
     <div className="flex px-2 py-2 gap-4">
      <div className={`flex justify-center items-center w-10 h-10 text-center rounded-full ${iconbg}`}> <Icon/></div>
      <div>
        <p>{title}</p>
        <h3 className='text-lg font-bold'>{number}</h3>
      </div>
     </div>
    </div>
  )
}
