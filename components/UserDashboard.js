import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from "../components/ProtectedRoute";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

function UserDashboard() {

    const successLogOut = () => {
      toast.success('Successfully logged out', {duration: 4000});
    }

    const {user, logout } = useAuth()

    const [displayName, setDisplayName] = useState("");

    const [userEmail, setUserEmail] = useState("")

    const router = useRouter() 

    useEffect(() => {
      if (user) {
        setDisplayName(user.displayName);
        setUserEmail(user.email)
      }
    }, [user]);

  return (
    <div>
      <Toaster
    position="bottom-center"
     reverseOrder={false}
      />
        <div className=' h-screen w-full relative flex items-center justify-center'>
            <Image src='/img/Aze.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    
            />
            <form className='absolute flex flex-col items-center bg-[#171717]/90 2xl:p-10 xl:p-10 lg:p-20 md:p-10 sm:p-9 p-7'>
               
                    <h2 className='text-white pb-10 text-xl text-bold'>Welcome to your Dashboard, <span className='uppercase text-orange-500'>{displayName}</span></h2>

                    <h2 className=' text-white pb-10 text-xl text-bold'>Your email: <span className='text-orange-500'>{userEmail}</span></h2> 

                    
                    {user &&
                     <Link href='/userProfileChange'>
                      <button className='text-white mt-5 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>Изменить Профиль</button>
                      </Link>
                    }              
                    

                    <button onClick={() => { logout(); successLogOut(), router.push('/SignIn')} } className='text-white mt-14 py-4 px-8 bg-orange-500 hover:bg-white transition duration-150 ease-in-out hover:text-orange-500 uppercase text-base font-Roboto'>выйти</button>
            </form>
        </div>
    
    </div>
  )
}

export default UserDashboard