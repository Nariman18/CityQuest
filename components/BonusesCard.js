import React from 'react'
import Image from 'next/image'

function BonusesCard() {
  return (
    <div className='flex items-center flex-col'>


        
    <div className='h-16 relative w-20 flex-shrink-0'>
        <Image src='/img/gift.png'
                fill
                alt="logo"
                className=" object-contain object-left"
        />
        
    </div>
   
    <div className='flex items-center flex-col justify-center'>
      <h4 className='uppercase text-white p-5'>Бонусы</h4>

     <p className='ml-10 text-gray-300 font-eb text-lg'>Побивайте рекорды и получайте призы!</p>
   </div>

    
</div>
  )
}

export default BonusesCard