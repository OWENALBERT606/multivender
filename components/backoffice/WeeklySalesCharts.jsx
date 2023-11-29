"use client"
import React, { useState } from 'react'
// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';


export default function WeeklySalesCharts() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display:'true',
            text: 'Chart.js Line Chart',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
      const data = {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(0, 137, 132)',
            backgroundColor: 'rgba(0, 137, 132, 0.5)',
          },
          // {
          //   label: 'Dataset 2',
          //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          //   borderColor: 'rgb(0, 162, 235)',
          //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
          // },
        ],
      };
    const tabs=[
        {
            title:"sales",
            type:"sales"
        },
        {
            title:"orders",
            type:"orders"
        }
    ]
    const [chartToDisplay,setChartToDisplay]=useState(tabs[0].type)
  return (
       <div className='text-xl font-bold bg-slate-700 text-white p-8 rounded-lg mb-3 '>
        <h1>Weekly sales charts</h1>
       <div className="p-4">
        {/* tabs */}
        

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        {
            tabs.map((tab)=>{
                return(
                    <li class="me-2">
            <button onClick={()=>setChartToDisplay(tab.type)} className={chartToDisplay==tab.type?"inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-300 dark:hover:text-gray-300"}>{tab.title}</button>
        </li>
                )
            })
        }
    </ul>
</div>

        {/* content */}
       {
        tabs.map((tab,i)=>{
            if(chartToDisplay==tab.type){
                return <Line options={options} data={data} />
            }
            return null;
        })
       }

       </div>

    </div>
  )
}
