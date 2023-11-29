import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SalesCharts from '@/components/backoffice/SalesCharts'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-900' >
        <Heading title="dashboard overview" />
        <LargeCards/>
       <SmallCards/>
       <SalesCharts/>

        {/* large cards */}
        {/* charts */}
        {/* recent orders table */}
    </div>
  )
}
