"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductChart() {
    const data = {
        labels: [
            'Brocoli', 
            'Carbage', 
            'Watermelon', 
            'Maize'
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [50, 10, 20,80],
            backgroundColor: [
              'rgba(13, 12, 12, 0.62)',
              'rgba(59, 3, 59, 0.62)',
              'rgba(6, 145, 43, 0.62)',
              'rgba(255, 47, 0, 0.62)',
            ],
            borderColor: [
              'rgba(13, 12, 12, 0.62)',
              'rgba(59, 3, 59, 0.62)',
              'rgba(6, 145, 43, 0.62)',
              'rgba(255, 47, 0, 0.62)',
                    ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='text-xl font-bold bg-slate-700 text-white p-8 rounded-lg mb-3 '>
        <h1>best selling charts</h1>
       <div className="p-8">
       <Pie data={data}/>
       </div>

    </div>
  )
}
