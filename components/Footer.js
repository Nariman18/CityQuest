import React from 'react'
import Image from "next/image"
import Link from 'next/link';

function Footer() {
  return (
    <div className='flex xl:flex-row lg:flex-row flex-col border-t border-b border-[#454545] justify-around p-14'>
        <div className='relative h-20 w-52 shrink-0'>
        <Image 
              src="/svg/logo.svg"
              fill
              alt="logo"
             className=" object-contain object-left"
             
            />
        </div>

        <div className='flex flex-col xl:border-b-0 lg:border-b-0 border-b border-[#454545] xl:mb-0 lg:mb-0 xl:mt-0 lg:mt-0 mt-10 mb-10 xl:pb-0 lg:pb-0 pb-14'>
            <h2 className='text-white my-5 uppercase text-lg font-thin'>Контакты</h2>
            <p className='text-[#989898] text-sm my-1'>+994 (50) 760 48 38</p>
            <p className='text-[#989898] text-sm my-1'>aliyev-nariman@mail.ru</p>
            <p className='text-[#989898] text-sm my-1 w-40'>AZ, Баку, Ясамальский район, ул. Нахчивани 9</p>
        </div>

        <div className='flex flex-col xl:border-b-0 lg:border-b-0 border-b border-[#454545] xl:mb-0 lg:mb-0 mb-10 xl:pb-0 lg:pb-0 pb-14'>
            <h2 className='text-white my-5 uppercase text-lg font-thin'>Соц Сети</h2>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Facebook</Link></p>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Instagram</Link></p>
            <p className='text-[#989898] text-sm w-40'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Telegram</Link></p>
        </div>

        <div className='flex flex-col mt-5 xl:mb-0 lg:mb-0 mb-10 xl:pb-0 lg:pb-0 pb-14'>
            <h2 className='text-white uppercase text-lg mb-5 font-thin'>Меню</h2>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Главная</Link></p>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Квесты</Link></p>
            <p className='text-[#989898] text-sm w-40'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>О Нас</Link></p>
            <p className='text-[#989898] text-sm w-40'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Новости</Link></p>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Политика Конфиденциальности</Link></p>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Политика Возврата</Link></p>
            <p className='text-[#989898] text-sm'><Link href='/' className='hover:text-orange-500 transition duration-150 ease-in-out'>Соглашение с покупателем</Link></p>
        </div>
    </div>
  )
}

export default Footer