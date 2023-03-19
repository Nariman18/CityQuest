import React from 'react'
import Image from 'next/image'

function GameGuide() {
  return (
    <div className=''>

<h2 className='text-orange-500 lg:text-3xl uppercase md:text-3xl sm:text-3xl text-xl mt-10 lg:mb-14 mb-2 md:mb-14 md:mx-20 xl:ml-36 xl:text-4xl sm:ml-32 lg:mx-10 mx-10 shrink-0 font-yeseva xl:w-[450px] sm:w-[400px]'>Как Пройти Квест?</h2>

            <div className=' xl:h-[510px] lg:h-[470px] md:h-[400px] w-[312px] h-[350px] 2xl:w-full xl:w-full lg:w-[500px] md:w-[520px] sm:w-full  relative  shrink-0   2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-20 sm:ml-20 ml-4'>   
            <Image src='/img/imgR.jpeg'
                fill
                alt="GameGuide"
                className=" object-contain object-left"
            />

            </div>
        

    </div>
  )
}

export default GameGuide