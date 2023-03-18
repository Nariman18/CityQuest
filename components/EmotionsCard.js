import React from 'react'
import Image from "next/image"

function EmotionsCard() {
  return (
    <div className='flex items-center justify-center flex-col'>


        
        <div className='h-16 relative w-20 flex-shrink-0'>
            <Image src='/img/smile.png'
                    fill
                    alt="logo"
                    className=" object-contain object-left"
            />
            
        </div>
        
        <div className='flex items-center flex-col justify-center pb-14'>
          <h4 className='uppercase text-white p-5'>Эмоции</h4>

         <p className='ml-20 text-gray-300 font-eb text-lg text-center mr-8'>Получите невероятные эмоции от прохождения испытаний!</p>
       </div>

        
    </div>
  )
}

export default EmotionsCard