import Heading from '@/components/backoffice/Heading'
import Pageheader from '@/components/backoffice/Pageheader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function page() {
  return (
    <div className='ml-4  mt-20'>
      {/* header */}
     <Pageheader heading="Banners" href="/dashboard/banners/new" linkTitle="Add banner"/>

      {/* table actions */}
     <TableActions/>
      <div className="py-8 px-56">
        <h2>Table</h2>
      </div>
    </div>
  )
}
