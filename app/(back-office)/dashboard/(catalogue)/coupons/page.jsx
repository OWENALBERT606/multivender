import Heading from '@/components/backoffice/Heading'
import Pageheader from '@/components/backoffice/Pageheader'
import TableActions from '@/components/backoffice/TableActions'
import React from 'react'

export default function page() {
  return (
    <div className='ml-4  mt-20'>
      {/* header */}
     <Pageheader heading="Coupons" href="/dashboard/coupons/new" linkTitle="Add Coupons"/>

      {/* table actions */}
     <TableActions/>
      <div className="py-8 px-56">
        <h2>Table</h2>
      </div>
    </div>
  )
}
