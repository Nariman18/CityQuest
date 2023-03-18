import React from 'react'
import Image from "next/image"

function Advertisement() {
  return (
    <div className='flex items-center justify-center flex-col'>


        
        <div className='h-16 relative w-20 flex-shrink-0'>
            <Image src='/img/joy.png'
                    fill
                    alt="logo"
                    className=" object-contain object-left"
            />
            
        </div>

        <div className='flex items-center flex-col justify-center pb-14'>
          <h4 className='uppercase text-white p-5'>Отдых</h4>

         <p className='ml-10 text-gray-300 font-eb text-lg text-center'> Активно отдохнете с друзьями, близкими и любимыми!</p>
       </div>

    </div>
  )
}

export default Advertisement