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

export default function NewCategory() {

  const [imageUrl,setImageUrl]=useState("");
  const [loading,setLoading]=useState("false")
  
const {register,handleSubmit,reset,formState:{errors}}=useForm();
async function onSubmit(data){

  // setLoading(true)
  const slug=generateSlug(data.title)
  data.slug=slug
  data.imageUrl=imageUrl
  console.log(data);
  makePostRequest(setLoading, "api/categories", data, "Category", reset
  )
}


  return (
    <div className='ml-4 mt-20 min-h-full'>
      <FormHeader title="New Category"/>
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full m-4 max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            />
            <TextareaInput
            label="Category description"
            name="description"
            register={register}
            errors={errors}

            />
            <Imageinput
          label="Category Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="categoryImageUploader"
          />
          </div>
          <SubmitButton
          isLoading={false}
          buttonTitle="Create Category"
          LoadingButtonTitle="Saving category please wait........."
          />
          
      </form>
    </div>
  )
}
