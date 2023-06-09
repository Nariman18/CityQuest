import React from 'react'
import Image from "next/image"
import { useState } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router";
import { useAuth } from '../context/AuthContext'


const MenuItems = ({ showMenu, active }) => {

  const {user} = useAuth()

  const router = useRouter();

    return (
      <ul
        className={
          
             `flex flex-col z-10 tra items-center fixed inset-0 uppercase ${ active ? "translate-y-0" : "-translate-y-full"} bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 2xl:hidden xl:hidden lg:hidden transition-all duration-500 ease-in-out`
            
        }
        
      >
        <CloseIcon onClick={showMenu} className="cursor-pointer text-4xl hover:text-orange-500 hover:transition duration-150 ease-in-out text-white" />
        <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out uppercase font-thin text-lg text-white'>
          <Link href="/">
            Главная
          </Link>
        </li>
        <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-white'>
          <Link href="/projects">
            Квесты
          </Link>
        </li>
  
        <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-white'>
          <Link href="/about">
            О Нас
          </Link>
        </li>
        <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out font-thin text-lg text-white'>
          <Link href="/contact">
            Контакты
          </Link>
        </li>
        <li className='text-white border py-2 px-5 bg-orange-500 hover:bg-white hover:text-orange-500 transition duration-150 ease-in-out font-thin text-lg'>
           {user ? (<button onClick={() => {router.push('/dashboard')}}>
            My Profile
            </button>) : (<button onClick={() => {router.push('/SignIn')}}>
            Log In
            </button>) }
        </li>
      </ul>
      
    );
  };

function Header() {

    const {user, logout} = useAuth()

    const router = useRouter();

    const [active, setActive] = useState(false);

    const showMenu = () => {
      setActive(!active);
    };

  return (
   <header className='sticky top-0 z-50 grid grid-cols-2 bg-[#171717] p-5 md:px-10 items-center'>

        <div onClick={() => router.push('/')} className="relative flex items-center cursor-pointer h-20 my-auto">
            <Image 
              src="/svg/logo.svg"
              fill
              alt="logo"
             className=" object-contain object-left"
             
            />
        </div>

        <nav>
    <div className="absolute right-6 2xl:hidden xl:hidden lg:hidden scale-150 text-orange-500 top-12 hover:text-white hover:transition duration-150 ease-in-out">
      <MenuOutlinedIcon
        onClick={showMenu}
        className="cursor-pointer"
      />
    </div>

    <ul className="hidden lg:flex md:justify-evenly space-x-5 p-6 uppercase text-gray-300 items-center font-el">
      <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out'>
        <Link href="/">
          Главная
        </Link>
      </li>
      <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out'>
        <Link href="/">
          Квесты
        </Link>
      </li>
      <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out shrink-0'>
        <Link href="/">
          О Нас
        </Link>
      </li>

      <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out'>
        <Link href="/about">
          Новости
        </Link>
      </li>
      <li className='hover:text-orange-500 hover:transition duration-150 ease-in-out'>
        <Link href="/contact">
          Контакты
        </Link>
      </li>

      
      {user ? (
        <button onClick={() => {router.push('/dashboard') }} className='uppercase text-white md:flex hidden border py-2 px-5 bg-orange-500 hover:bg-white hover:text-orange-500 hover:translate-x-1 transition duration-150 ease-out font-el'>My Profile</button>
      ) : ( <button onClick={() => router.push('/SignIn')} className='uppercase text-white md:flex hidden border py-2 px-5 bg-orange-500 hover:bg-white hover:text-orange-500 hover:translate-x-1 transition duration-150 ease-out font-el'>Log In</button> ) }
      
    </ul>
    
    <MenuItems showMenu={showMenu} active={active} />
</nav>

   </header>
  )
}

export default Header