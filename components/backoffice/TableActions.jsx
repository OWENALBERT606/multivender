import React from 'react'
import { Download, DownloadIcon, Plus, Search, Trash } from 'lucide-react'
import Link from 'next/link'

export default function TableActions() {
  return (
    <div className="justify-between m-4 gap-8 py-6 px-8 flex bg-slate-700 rounded-lg">
    <button class="items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-slate-800 hover:ring-2 hover:text-white hover-ring-2 ring-lime-500  focus:ring-4 focus:outline  space-4 flex focus:ring-lime-500 px-4 py-2">
      <DownloadIcon/>
      <span>Export</span>
    </button>
    <div className="flex-grow">
    <label htmlFor="table-search" className="sr-only">Search</label>
    <div className="relative mt-1">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
        </div>
        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-3/4 bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Search for items"/>
    </div>
</div>
    <button className='flex gap-3 bg-red-600 justify-center items-center px-4 py-2 rounded-lg hover:bg-red-400'>
      <Trash/>
      <span>Bulk Delete</span>
      </button>
  </div>
  )
}
