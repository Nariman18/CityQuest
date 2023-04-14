import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import { useState } from "react"
import { useAuth } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast';


const errorLogIn = () => {
  toast.error("User's data is invalid", { duration: 6000 })
}

const successLogIn = () => {
  toast.success("Successfully Logged In", { duration: 4000 })
}

const LogIn = () => {
  const router = useRouter()
  const {user, login} = useAuth()
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  

    const handleLogin = async (e) => {
      e.preventDefault()
     
      
      try {
        await login(data.email, data.password)
        successLogIn()
        router.push('/')
      }catch(error) {
        console.log(error)
        errorLogIn()
      }
    }

  

  return (
    <div>
      <Toaster position='bottom-center' reverseOrder={false} />
        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <form onSubmit={handleLogin} className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Log In</h2>

                    <div className='flex flex-col space-y-5 mb-4'>
                      <input onChange={(e) => {
                        setData({...data, email: e.target.value})
                      }} value={data.email} type="email" required placeholder='Your email address' className='p-3 text-sm outline-none w-[300px] bg-gray-800 text-white'></input>

                      <input onChange={(e) => {
                        setData({...data, password: e.target.value})
                      }} values={data.password} type="password" required placeholder='Your password' className='p-3 text-sm outline-none w-[300px] bg-gray-800 text-white'></input>
                    </div>

                    <div className='flex space-x-36'>
                      <a href='/signUp' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Sign Up</a>
                      <a href='/' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Forgot your password?</a>
                    </div>
                    <button className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Log in</button>
            </form>
        </div>

    </div>
  )
}

export default LogIn