import React from 'react'
import Image from "next/image"

function AvailabilityCard() {
  return (
    <div className='flex items-center justify-center flex-col'>


        
        <div className='h-16 relative w-20 flex-shrink-0'>
            <Image src='/img/mobile-web.png'
                    fill
                    alt="logo"
                    className=" object-contain object-left"
            />
            
        </div>
       
        <div className='flex flex-col items-center justify-center pb-14'>
          <h4 className='uppercase text-white p-5 '>Доступость</h4>

         <p className='ml-10 text-gray-300 w-1/2 font-eb text-lg text-center mr-6'> Находитесь в поиске новых приключений? Для прохождения квеста вам понадобиться только телефон с доступом в интернет!</p>
       </div>

        
    </div>
  )
}

export default AvailabilityCard