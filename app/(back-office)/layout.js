import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex' >
        {/* sidebar */}
       <Sidebar/>
        {/* main body */}
        <div className='w-full' >
            {/* header */}
           <Navbar/>
            <main className='mt-16 bg-slate-900 ml-60 h-screen' >
                {children}
            </main>
            {/* main pages */}

        </div>
    </div>
  )
}
