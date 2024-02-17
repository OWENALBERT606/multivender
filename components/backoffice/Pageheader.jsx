import { Plus } from 'lucide-react'
import React from 'react'
import Heading from './Heading'
import Link from 'next/link'

export default function Pageheader({heading,linkTitle,href}) {
  return (
    <div className="flex justify-between px-2 py-4 border-b border-slate-500">
    <Heading title={heading}/>
    <Link href={href} className='bg-lime-500 px-4 y-2 flex py-1 rounded-sm'>
    <Plus/>
    <span>{linkTitle}</span>
    </Link>
  </div>
  )
}
