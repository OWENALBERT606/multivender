import React from 'react'

export default function Heading({title}) {
  return (
    <div>
        <h2 className='py-0 px-8 text-2xl font-semibold dark:text-slate-50 text-slate-900'>{title}</h2>
    </div>
  )
}
