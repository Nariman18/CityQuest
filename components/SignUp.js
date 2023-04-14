import React, { useState } from 'react'
import Image from "next/image"
import { useAuth } from '../context/AuthContext'
import auth from '../config/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';

function SignUp () {

  const router = useRouter()

  const errorSignUp = () => {
    toast.error("Something went wrong")
  }

  const successSignUp = () => {
    toast.success("Successfully signed up!")
  }

    const { user, signup, logout } = useAuth()
    console.log(user)
    const [data, setData] = useState({
      email: '',
      password: '',
      displayName: '',
      confirmPassword: '',
    })
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match")
        return;
      }
  
      try {
        await signup(data.email, data.password, data.displayName)
        await updateProfile(auth.currentUser, { displayName: data.displayName });
        successSignUp()
        logout();
        router.push('/SignIn');
      } catch (error) {
        
        errorSignUp()
        console.log(error)
      }
      console.log(data)
    };

  return (
    <div>
      <Toaster position='bottom-center' reverseOrder={false} />
        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <form onSubmit={handleSubmit} className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='uppercase text-white pb-10 text-2xl text-bold'>Registration</h2>

                    <div className='flex flex-col space-y-5 mb-4'>

                    <input type="text" onChange={(e) => setData({...data, displayName: e.target.value})} required placeholder='Your name' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                      <input onChange={(e) => {
                        setData({...data, email: e.target.value})
                      }} value={data.email} type="email" required placeholder='Your email address' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                      <input onChange={(e) => {
                        setData({...data, password: e.target.value})
                      }} values={data.password} type="password" required placeholder='Your password' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>

                          <input onChange={(e) => {
                        setData({...data, confirmPassword: e.target.value})
                      }} values={data.confirmPassword} type="password" required placeholder='Confirm your password' className='p-4 text-sm outline-none w-[260px] bg-gray-800 text-white'></input>
                    </div>

                    <div className='flex space-x-36'>
                      <a href='/SignIn' className='text-orange-500 text-xs flex-grow hover:text-white transition duration-150 ease-in-out'>Log In</a>
    
                    </div>
                    <button className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Sign Up</button>
            </form>
        </div>

    </div>
  )
}

export default SignUp