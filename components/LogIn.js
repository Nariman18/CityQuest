import React from 'react'
import Image from "next/image"

function LogIn() {
  return (
    <div>

        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <div className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Войти</h2>

                    <div className='flex flex-col space-y-5 mb-4'>
                      <input type="text" placeholder='Ваша почта' className='p-3 text-sm outline-none pr-32 pl-5 bg-gray-800 text-white'></input>
                      <input type="password" placeholder='Ваш пароль' className='p-3 text-sm outline-none pr-32 pl-5 bg-gray-800 text-white'></input>
                    </div>

                    <div className='flex space-x-36'>
                      <a href='/' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Регистрация</a>
                      <a href='/' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Забыли пароль?</a>
                    </div>
                    <button className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>LogIn</button>
            </div>
        </div>

    </div>
  )
}

export default LogIn