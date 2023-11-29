import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='bg-slate-800 space-y-6 w-60 h-screen fixed left-0 top-0 p-x-2 px-3 py-3' >
        <Link className='mb-6' href="#" >Logo</Link>
        <div className='flex flex-col text-slate-50' >
        <Link href="#" >Dashboard</Link>
        <Link href="#" >Catalogue</Link>
        <Link href="#" >Cuatomers</Link>
        <Link href="#" >Markets</Link>
        <Link href="#" >Farmers</Link>
        <Link href="#" >Orders</Link>
        <Link href="#" >Staff</Link>
        <Link href="#" >Settings</Link>
        <Link href="#" >Online store</Link>

        </div>
    </div>
  )
}
