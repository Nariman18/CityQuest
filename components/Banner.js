import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import Link from 'next/link'

function Banner() {
  
  const router = useRouter()
  const {user} = useAuth()

  return (
    <div className='relative h-[550px] sm:h-[650px] lg:h-[750px] xl:h-[850px] 2xl:h-[950px]'>
        <Image src='/img/Banner.jpeg' fill className='object-cover brightness-75'/>
        <div className='absolute top-1/3 w-full text-center'>
            <h1 className="text-6xl sm:text-8xl text-white font-dancing pb-3">City Quest</h1>
            <h2 className='text-white text-3xl sm:text-5xl font-lobster'>Узнай тайны своего города</h2>

            { user ? (
              <Link href='#startGame'>
            <button className="text-white bg-orange-500 px-10 py-4 shadow-md border mt-9 font-bold my-3 hover:bg-white hover:text-orange-500 active:scale-90 transition duration-150 uppercase animate-animatepulse">Начать</button> </Link>)
            : ( <Link href='SignIn'>
            <button className="text-white bg-orange-500 px-10 py-4 shadow-md border mt-9 font-bold my-3 hover:bg-white hover:text-orange-500 active:scale-90 transition duration-150 uppercase animate-animatepulse">Начать</button> </Link>) 
            }
            
        </div>
    </div>
  )
}

export default Banner