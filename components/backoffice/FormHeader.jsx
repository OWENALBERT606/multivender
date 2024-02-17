import React from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'


export default function FormHeader({title}) {
  const router = useRouter();
 
  return (
    <div className="flex justify-between bg-slate-500 m-6 shadow-lg rounded-xl py-6 mt-24 mb-12 px-12 items-center">
        <h2>{title}</h2>
       <button
       onClick={()=>router.back()}
       > <X/></button>
      </div>
  )
}
