import { Bell, LayoutDashboard, LogOut, Menu, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeSwitcherBtn } from '../ThemeSwitcherBtn'


export default function Navbar() {
  return (
    <div className='flex justify-between px-8 py-8 items-center bg-slate-700 text-slate-50 h-20 fixed top-0 left-60 w-full z-50 pr-[20rem]'>
        <div className="menu">
            <button><Menu/></button>
        </div>
        <div className="flex items-center justify-center space-x-3 text-green-600">
          <button className='flex items-center'> <ThemeSwitcherBtn/></button>
<button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-green-600  rounded-lg hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:ring dark:focus:ring-white">

<DropdownMenu>
  <DropdownMenuTrigger>
  <button><Bell/></button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="px-4 py-2">
    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
    <DropdownMenuSeparator/>
    <DropdownMenuItem>
    <div className='flex items-center space-x-1 gap-1 justify-center'>
    <Image src="/playing.jpg" width={120} height={120} alt='userprofile' className='w-8 h-8 rounded-full'/>
    <div className="flex flex-col space-y-2">
      <p>lorem is nice to use</p>
      <div className="flex gap-1 items-center space-x-1">
        <p className='px-2 py-0.5 text-sm rounded-full bg-red-600 text-white' >stockout</p>
        <p>12:00 Nov 2023</p>
      </div>
    </div>
    <button>
      <X/>
    </button>
    </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <div className='flex items-center space-x-1 gap-1 justify-center'>
    <Image src="/playing.jpg" width={120} height={120} alt='userprofile' className='w-8 h-8 rounded-full'/>
    <div className="flex flex-col space-y-2">
      <p>lorem is nice to use</p>
      <div className="flex gap-1 items-center space-x-1">
        <p className='px-2 py-0.5 text-sm rounded-full bg-red-600 text-white' >stockout</p>
        <p>12:00 Nov 2023</p>
      </div>
    </div>
    <button>
      <X/>
    </button>
    </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <div className='flex items-center space-x-1 gap-1 justify-center'>
    <Image src="/playing.jpg" width={120} height={120} alt='userprofile' className='w-8 h-8 rounded-full'/>
    <div className="flex flex-col space-y-2">
      <p>lorem is nice to use</p>
      <div className="flex gap-1 items-center space-x-1">
        <p className='px-2 py-0.5 text-sm rounded-full bg-red-600 text-white' >stockout</p>
        <p>12:00 Nov 2023</p>
      </div>
    </div>
    <button>
      <X/>
    </button>
    </div>
    </DropdownMenuItem>
    <DropdownMenuSeparator/>
  </DropdownMenuContent>
</DropdownMenu>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0 -end-0 dark:border-gray-900">20</div>
</button>
            <DropdownMenu>
  <DropdownMenuTrigger>
  <button className='hover:ring-white' >
              <Image src="/playing.jpg" width={120} height={120} alt='userprofile' className='w-8 h-8 rounded-full'/>
            </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="px-4 py-2">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator/>
    <DropdownMenuItem>
    <button className='flex items-center space-x-1'>
    <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
    </button>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <button className='flex items-center space-x-1'>
    <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
    </button>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <button className='flex items-center space-x-1'>
    <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
    </button>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
    </div>
  )
}
