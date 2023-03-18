 import React from 'react'
import Image from 'next/image'

function HowToUse() {
  return (
    <div className='flex flex-col 2xl:p-24 xl:p-24 lg:p-24 md:p-24 sm:p-14 p-5 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 mb-20 2xl:space-y-20 xl:space-y-20 lg:space-y-20 md:space-y-20 sm:space-y-20 space-y-[150px]'>
            <div className='h-14 w-full relative flex items-center'>   
            <Image src='/img/phone-payment.png'
                fill
                alt="payment"
                className=" object-contain object-left"
            />
            <p className='text-white ml-20 font-eb text-xl'>Выберите интересующий вас квест и оплатите его на сайте.</p>
            </div>

            <div className='h-14 w-full relative flex items-center'>   
            <Image src='/img/start.png'
                fill
                alt="payment"
                className=" object-contain object-left"
            />
            <p className='text-white ml-20 font-eb text-xl'>Приходите на стартовую точку квеста. Квест будет проводиться в пешем формате.</p>
            </div>

            <div className='h-14 w-full relative flex items-center'>   
            <Image src='/img/location.png'
                fill
                alt="payment"
                className=" object-contain object-left"
            />
            <p className='text-white ml-20 font-eb text-xl'>Нажмите кнопку «начать», для получения доступа к квесту. Для прохождения квеста достаточно одного телефона.</p>
            </div>

            <div className='h-14 w-full relative flex items-center'>   
            <Image src='/img/correct.png'
                fill
                alt="payment"
                className=" object-contain object-left"
            />
            <p className='text-white ml-20 font-eb text-xl'>Введите правильный ответ в указанном месте на сайте, и вы получите доступ к следующему заданию.</p>
            </div>

            <div className='h-14 w-full relative flex items-center'>   
            <Image src='/img/finish1.png'
                fill
                alt="payment"
                className=" object-contain object-left"
            />
            <p className='text-white ml-20 font-eb text-xl'>После прохождения последнего испытания,квест считается пройденным. После прохождения вас будет ждать бонус в виде подарка!</p>
            </div>
            
    </div>
  )
}

export default HowToUse 