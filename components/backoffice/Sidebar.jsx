"use client"
import { Accessibility, Boxes, Building2, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, LayoutGrid, LayoutList, List, LogOut, ScanSearch, SendToBack, Settings, ShipWheel, ShoppingBag, Slack, Store, Tractor, Truck, TruckIcon, Users, Users2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Sidebar({showSidebar}) {
  const pathname=usePathname()
  const sideBarLinks=[
    {
      title:"Customers",
      icon:Users,
      url:"/dashboard/customers"
    },
    {
      title:"Markets",
      icon:Store,
      url:"/dashboard/orders"
    },
    {
      title:"Farmers",
      icon:Tractor,
      url:"/dashboard/farmers"
    },
    {
      title:"Orders",
      icon:Truck,
      url:"/dashboard/orders"
    },
    {
      title:"Our Staff",
      icon:Users2,
      url:"/dashboard/staff"
    },
    {
      title:"Online Store",
      icon:ShoppingBag,
      url:"/dashboard/onlinestore"
    },
    {
      title:"Wallet",
      icon:CircleDollarSign,
      url:"/dashboard/wallet"
    },
    {
      title:"Limi Community",
      icon:Building2,
      url:"/dashboard/community"
    },
    {
      title:"Settings",
      icon:ShipWheel,
      url:"/dashboard/settings"
    }
  ]
  const catalogueLinks =[
    {
      title:"Products",
      icon:Boxes,
      url:"/dashboard/products"
    },
    {
      title:"Categories",
      icon:LayoutList,
      url:"/dashboard/categories"
    },
    {
      title:"Attributes",
      icon:SendToBack,
      url:"/dashboard/attributes"
    },
    {
      title:"Coupons",
      icon:ScanSearch,
      url:"/dashboard/coupons"
    },
    {
      title:"Store slides",
      icon:List,
      url:"/dashboard/storeslides"
    }
  ]
  const [openMenu, setOpenMenu]=useState(false);
  return (
    <div className={showSidebar?'hidden sm:block bg-slate-800 rounded-lg space-y-6 w-64 h-screen fixed left-0 top-0 p-x-2  py-3 overflow-y-scroll':'hidden sm:block bg-slate-800 rounded-lg space-y-6 w-64 h-screen fixed left-0 top-0 p-x-2  py-3 overflow-y-scroll'} >
        <Link className='mb-6' href="#" >
          <Image src="/Free-Download-Editable-Abstract-Logo-Design-2048x1152.jpg"  width={100} height={80}  alt='logo' />
        </Link>
        <div className='flex flex-col gap-4 text-slate-50' >
        <Link href="/dashboard" className={pathname=='/dashboard'?"flex items-center space-x-2 text-green-600 px-6 py-1 hover:text-slate-500 border-l-8 border-green-600":"flex items-center space-x-2 px-6 py-1 hover:text-slate-500"}>
          <LayoutGrid/>
          <span>Dashboard</span>
        </Link>
        <Collapsible>
  <CollapsibleTrigger>
  <button onClick={()=>setOpenMenu(!openMenu)} className='flex items-center space-x-1 px-6 py-1'>
          <Slack/>
          <span>Catalogue</span>
          {
            openMenu?<ChevronRight/>:<ChevronDown/>
          }
        </button>
  </CollapsibleTrigger>
  <CollapsibleContent className='px-4 bg-slate-700 ml-8 mr-8 text-sm' >
    {
      catalogueLinks.map((item,i)=>{
        const Iconz= item.icon
        return(
          <Link key={i} href={item.url} className={pathname==item.url?"flex items-center bg-slate-700 text-sm space-x-2 text-green-600 px-6 py-1 hover:text-slate-500":"flex items-center space-x-2 px-6 py-1 hover:text-slate-500"}>
          <Iconz/>
          <span>{item.title}</span>
        </Link>
        )
      })
    }
  </CollapsibleContent>
</Collapsible>
       {
        sideBarLinks.map((item,i)=>{
          const Icon = item.icon
          return(
            <Link key={i} href={item.url} className={item.url==pathname?"flex items-center space-x-2 px-6 py-1 hover:text-slate-500 border-l-8 border-green-600 text-green-600":"flex items-center space-x-2 px-6 py-1 hover:text-slate-500"}>
            <Icon/>
            <span>{item.title}</span>
          </Link>
          )
        })
       }
       <button className='flex space-x-2 bg-green-600 px-3 py-2 rounded-lg mr-6 ml-6'>
       <LogOut/>
       <span> Log Out</span>
        </button>

        </div>
    </div>
  )
}
