"use client"
import FormHeader from '@/components/backoffice/FormHeader'
import Imageinput from '@/components/forminputs/Imageinput'
import SubmitButton from '@/components/forminputs/SubmitButton'
import TextareaInput from '@/components/forminputs/TextAreainput'
import TextInput from '@/components/forminputs/Textinput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import { generateSlug } from '@/lib/generateSlug'
import { Watch } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCoupon() {

  const [loading,setLoading]=useState("")
  const [couponCode,setCouponCode]=useState(generateCouponCode())
  
const {register,handleSubmit,reset,formState:{errors}}=useForm();
async function onSubmit(data){

  const couponCode=generateCouponCode(data.title,data.expiryDate)
  data.couponCode=couponCode
  setLoading(true)
  // const slug=generateSlug(data.title)
  // data.slug=slug
  console.log(data);
  makePostRequest(setLoading, "api/coupons", data, "coupon", reset
  );
  console.log(data)
}


  return (
    <div className='ml-4 mt-20 min-h-full'>
      <FormHeader title="New Coupon "/>
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full m-4 max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className=''
            />
            <TextInput
            type='date'
            label="Coupon Expiry date"
            name="expiryDate"
            register={register}
            errors={errors}
            className=''
            />
          </div>
          <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          LoadingButtonTitle="Saving coupon please wait........."
          />
          
      </form>
    </div>
  )
}
