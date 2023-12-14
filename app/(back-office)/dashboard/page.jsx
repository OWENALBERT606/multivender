import CustomDataTable from '@/components/backoffice/CustomDataTable'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SalesCharts from '@/components/backoffice/SalesCharts'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div className='dark:bg-slate-900 bg-slate-50' >
        <Heading title="dashboard overview" />
        <LargeCards/>
        
        {/* large cards */}
       <SmallCards/>
       {/* charts */}
       <SalesCharts/>
       {/* recent orders table */}
       <CustomDataTable/>

        
        
    </div>
  )
}
