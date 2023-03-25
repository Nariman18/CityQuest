import React, { useState } from 'react'
import Image from "next/image"
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

function UserDashboard() {

    const { logout } = useAuth()

    const router = useRouter() 

  return (
    <div>
        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <form className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Welcome to your Dashboard. Please don't forget that Kamran as well as Javid are Peysers.</h2>

            

                    <button onClick={() => { logout(); router.push('/')} } className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>выйти</button>
            </form>
        </div>
    </div>
  )
}

export default UserDashboard