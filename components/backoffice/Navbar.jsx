import { Bell, Menu, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between px-8 items-center bg-slate-700 text-slate-50 h-16 fixed top-0 left-60 w-60' >
        <div className="menu">
            <button><Menu/></button>
        </div>

        <div className="flex space-x-3">
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
    </div>
  )
}
