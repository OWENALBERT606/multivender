"use client"
import FormHeader from '@/components/backoffice/FormHeader'
import Imageinput from '@/components/forminputs/Imageinput'
import SubmitButton from '@/components/forminputs/SubmitButton'
import TextareaInput from '@/components/forminputs/TextAreainput'
import TextInput from '@/components/forminputs/Textinput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewBanner() {

  const [imageUrl,setImageUrl]=useState("");
  const [loading,setLoading]=useState("false")
  
const {register,handleSubmit,reset,formState:{errors}}=useForm();
async function onSubmit(data){

  // setLoading(true)
  const slug=generateSlug(data.title)
  data.slug=slug
  data.imageUrl=imageUrl
  console.log(data);
  makePostRequest(setLoading, "api/banners", data, "Banner", reset
  );
  setImageUrl("")
}


  return (
    <div className='ml-4 mt-20 min-h-full'>
      <FormHeader title="New Banner"/>
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full m-4 max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
            label="Banner title"
            name="title"
            register={register}
            errors={errors}
            />
            <TextInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
            />

            {/* configure this endpoint in the core js */}
            <Imageinput
          label="Banner Image"
          type="url"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="bannerImageUploader"
          />
          </div>
          <SubmitButton
          isLoading={false}
          buttonTitle="Create Banner"
          LoadingButtonTitle="Saving category please wait........."
          />
          
      </form>
    </div>
  )
}
