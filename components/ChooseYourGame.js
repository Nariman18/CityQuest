import React, { useState } from 'react'
import Image from "next/image"
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GroupIcon from '@mui/icons-material/Group';
import { useRouter } from 'next/router';

function ChooseYourGame() {

  const router = useRouter()

  const [cardsShown1, setCards1] = useState(false)
  const [cardsShown2, setCards2] = useState(false)
  const [cardsShown3, setCards3] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center mt-10 mb-8'>
            <h1 className='text-white text-lg uppercase font-yeseva xl:text-2xl'>Выберите один из</h1>
            <h4 className='text-orange-500 text-4xl uppercase mt-4 font-yeseva xl:text-5xl'>Наших квестов</h4>
        </div>

        <div className='grid xl:grid-cols-3 place-items-center lg:grid-cols-2'>
            <div onClick={() => {router.push('/SignIn')}} className='relative h-[250px] w-[350px] cursor-pointer flex justify-center items-center xl:mb-0 lg:mb-14 md:mb-10 mb-10 sm:mb-10 mr-0  group hover:scale-110 transition duration-150 ease-in-out'>
            <Image src='/img/Icheri.jpeg'
                    fill
                    alt="logo"
                    className=" object-contain"
                    onMouseEnter={() => setCards1(true)}
                    onMouseLeave={() => setCards1(false)}
            />
                <p className='text-white absolute text-lg font-bold font-yeseva uppercase visible group-hover:invisible'>По следам старого города</p>

                {cardsShown1 && <div>

                  <p className='text-white absolute top-2 right-3 text-[16px] flex items-center font-thin group-hover:text-white'><HomeIcon fill className='h-5 text-orange-500'/> ИчериШехер</p>
                  <p className='text-white absolute bottom-8 left-4 flex items-center font-thin text-[16px]'><NotificationsActiveIcon fill className='h-4 text-orange-500'/> 2 Часа</p>
                  <p className='text-white absolute bottom-2 left-4 flex items-center font-thin text-[16px]'><GroupIcon fill className='h-4 text-orange-500'/> 2-5 Игроков</p>
                  </div>}
            </div>


            <div onClick={() => {router.push('/SignIn')}} className='relative h-[240px] w-[350px] cursor-pointer flex justify-center items-center xl:mb-0 lg:mb-14 md:mb-10 mb-10 sm:mb-10 lg:mx-7 group hover:scale-110 transition duration-150 ease-in-out'>
            <Image src='/img/IcheriSheher.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    onMouseEnter={() => setCards2(true)}
                    onMouseLeave={() => setCards2(false)}
            />
            <p className='text-white absolute text-lg font-bold font-yeseva uppercase visible group-hover:invisible'>Побег из крепости</p>

            {cardsShown2 && <div onMouseEnter={() => setCards2(true)} onMouseLeave={() => setCards2(false)}>

            <p className='text-white absolute top-2 right-3 text-[16px] flex items-center font-thin group-hover:text-white'><HomeIcon fill className='h-5 text-orange-500'/> IceriSheher</p>
            <p className='text-white absolute bottom-8 left-4 flex items-center font-thin text-[16px]'><NotificationsActiveIcon fill className='h-4 text-orange-500'/> 2 Часа</p>
            <p className='text-white absolute bottom-2 left-4 flex items-center font-thin text-[16px]'><GroupIcon fill className='h-4 text-orange-500'/> 2-5 Игроков</p>
            </div>}

            </div>

            <div onClick={() => router.push('/SignIn')} className='relative h-[245px] w-[340px] cursor-pointer flex justify-center items-center xl:mb-0 lg:mb-14 md:mb-10 mb-10 sm:mb-10 group hover:scale-110 transition duration-150 ease-in-out'>
            <Image src='/img/902203377.jpeg'
                    fill
                    alt="logo"
                    className=" object-cover"
                    onMouseEnter={() => setCards3(true)}
                    onMouseLeave={() => setCards3(false)}

            />
            <p className='text-white absolute text-lg font-bold font-yeseva uppercase visible group-hover:invisible'>вперёд в будущее</p>
            {cardsShown3 && <div onMouseEnter={() => setCards3(true)} onMouseLeave={() => setCards3(false)}>

            <p className='text-white absolute top-2 right-3 text-[16px] flex items-center font-thin group-hover:text-white'><HomeIcon fill className='h-5 text-orange-500'/> Ваши Воспоминания</p>
            <p className='text-white absolute bottom-8 left-4 flex items-center font-thin text-[16px]'><NotificationsActiveIcon fill className='h-4 text-orange-500'/> 2 Часа</p>
            <p className='text-white absolute bottom-2 left-4 flex items-center font-thin text-[16px]'><GroupIcon fill className='h-4 text-orange-500'/> Только для двоих</p>
            </div>}

            </div>
        </div>
       
 

    </div>
  )
}

export default ChooseYourGame 