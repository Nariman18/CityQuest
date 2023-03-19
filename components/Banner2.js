import React from 'react'
import Image from "next/image"

function Banner2() {
  return (
    <div className='relative h-[400px] flex items-center justify-center'>
        <Image src='/img/Banner2.jpeg' fill className='object-cover'/>
        <p className='absolute text-white mb-[500px] 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] text-[18px] font-lobstertwo'>Почувствуем силу командного духа!</p>
        <em className='absolute text-white flex-grow-0 2xl:px-[550px] xl:px-[550px] lg:px-[550px] md:px-[100px] px-0 text-center mt-16 font-bold '>
            ДЕЛАЙТЕ ФОТО ПРИ ПРОХОЖДЕНИИ КВЕСТА РЯДОМ С 
            НАШИМИ ЛОКАЦИЯМИ,ОТПРАВЛЯЙТЕ ИХ НАМ ИЛИ 
            ДЕЛИТЕСЬ ИМИ С ДАННЫМИ ХЕШТЭГАМИ <span className='text-orange-500 mx-[8px]'>#CITYQUEST</span> 
            <span className='text-orange-500'>#CITYQUESTAZ</span> И МЫ БУДЕМ ПУБЛИКОВАТЬ ВАШИ 
            ФОТОГРАФИИ НА НАШИХ СТРАНИЧКАХ!</em>
    </div>
  )
}

export default Banner2