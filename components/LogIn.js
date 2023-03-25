import React, { useState } from 'react'
import Image from "next/image"
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'


const LogIn = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/')
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
  }

  return (
    <div>

        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <form onSubmit={handleLogin} className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Войти</h2>

                    <div className='flex flex-col space-y-5 mb-4'>
                      <input onChange={(e) => {
                        setData({...data, email: e.target.value})
                      }} value={data.email} type="email" required placeholder='Ваша почта' className='p-3 text-sm outline-none w-[300px] bg-gray-800 text-white'></input>

                      <input onChange={(e) => {
                        setData({...data, password: e.target.value})
                      }} values={data.password} type="password" required placeholder='Ваш пароль' className='p-3 text-sm outline-none w-[300px] bg-gray-800 text-white'></input>
                    </div>

                    <div className='flex space-x-36'>
                      <a href='/signUp' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Регистрация</a>
                      <a href='/' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Забыли пароль?</a>
                    </div>
                    <button className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Log in</button>
            </form>
        </div>

    </div>
  )
}

export default LogIn