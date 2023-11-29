import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

export default function SmallCards() {
  const orderStatus=[
    {
      title:"Total orders",
      number:23400,
      iconbg:"bg-blue-600",
      icon:ShoppingCart,
    }, {
      title:"Orders pending",
      number:132000,
      iconbg:"bg-green-600",
      icon:Loader2,
    }, {
      title:"Orders processing",
      number:7000,
      iconbg:"bg-orange-600",
      icon:RefreshCcw,
    },
    {
      title:"Orders delivered",
      number:549,
      iconbg:"bg-purple-600",
      icon:CheckCheck,
    }
    // <Loader2/>
  ]
  return (
<div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3 px-4 py-2       lg-grid-cols-3 mt-8'>
        {/* card */}
        {
          orderStatus.map((data,i)=>{
            return(
              <SmallCard data={data}/>
            )
          })
        }
    </div>
  )
}
