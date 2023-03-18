import React from 'react'
import Image from "next/image"
import StarRateIcon from '@mui/icons-material/StarRate';

function RatingCards() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-14'>
            <h1 className='text-white text-lg  font-yeseva xl:text-2xl'>Отзывы</h1>
            <h4 className='text-orange-500 text-xl uppercase mt-4 font-yeseva xl:text-4xl'>Отзывы Наших Игроков</h4>
        </div>

        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-stretch mt-14 space-x-5  mx-10'>
            <div className='border border-orange-500 bg-[#1A1A1E] p-5 ml-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Oyunu cox beyendik, seheri diger uzunden tanidiq”</p>
                <h4 className='text-white font-lobstertwo mt-5'>Gunay24</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Super oyundur, yenilikdir Bakida,cox maraqli idi”</p>
                <h4 className='text-white font-lobstertwo mt-5'>eminjafaroff</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Задания очень интересные, задумка просто супер!😘”</p>
                <h4 className='text-white font-lobstertwo mt-5'>Zaur_98</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>““Все таки в нашем городе есть много интересных мест! Спасибо,очень понравилось!””</p>
                <h4 className='text-white font-lobstertwo mt-5'>Babek</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Квест очень интересный, обязательно придём еще🤗””</p>
                <h4 className='text-white font-lobstertwo mt-5'>Aygul</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Классный городской квест, узнаешь много нового о своем городе)”</p>
                <h4 className='text-white font-lobstertwo mt-5'>Tahir</h4>
            </div>

            <div className='border border-orange-500 bg-[#1A1A1E] p-5 mb-8'>
                <p>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                <StarRateIcon className='text-orange-500'/>
                </p>
                <p className='text-[#989898] mt-5'>“Проект просто супер) всем советую, очень увлекательно)”</p>
                <h4 className='text-white font-lobstertwo mt-5'>Nadya12</h4>
            </div>
        </div>
    </div>
  )
}

export default RatingCards