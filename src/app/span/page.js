"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { data } from '@/data/100'

const page = () => {
  const router = useRouter()
  return (
    <form action={(e)=>{
      console.log(e)
      router.push('/test/20-30')
    }}>
      <input type="number" name='begin' min={1} max={data.length-1} defaultValue={1}/>
      <input type="number" name="end" min={1} max={data.length-1} defaultValue={data.length-1}/>
      <button type='submit'>tuk</button>
    </form >
  )
}

export default page