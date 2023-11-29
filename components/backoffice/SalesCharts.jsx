import React from 'react'
import WeeklySalesCharts from './WeeklySalesCharts'
import BestSellingProductChart from './BestSellingProductChart'

export default function SalesCharts() {
  return (
    <div className='grid gird-cols-1 lg:grid-cols-2 gap-4 px-4 py-2'>
        <WeeklySalesCharts/>
        <BestSellingProductChart/>
    </div>
  )
}
