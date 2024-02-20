"use client"
import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React, { useState } from 'react'

export default function Layout({children}) {
  const [showSidebar,setShowSidebar]=useState(false)
  return (
    <div className='flex' >
        {/* sidebar */}
       <Sidebar showSidebar={showSidebar} />
        {/* main body */}
        <div className='w-full'>
            {/* header */}
           <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <main className='mt-16 min-h-screen bg-white dark:bg-slate-950 ml-60 py-1' >
                {children}
            </main>
            {/* main pages */}

        </div>
    </div>
  )
}
