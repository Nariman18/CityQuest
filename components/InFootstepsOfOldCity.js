import Image from 'next/image'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';

function InFootstepsOfOldCity() {

    const router = useRouter()
  return (
    <div className='bg-[#171717] flex flex-col items-center'>
        <div className='flex relative w-full h-[350px] justify-center items-center'>
       <Image src='/img/tbg.jpeg' fill='true' className='object-cover' alt='Banner' /> 
       <p className='uppercase text-white absolute 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold'>По следам старого города</p>
       </div>

       <div className='flex flex-col justify-center items-center mt-14'>

        <div className='relative 2xl:w-[1200px] xl:w-[1200px] lg:w-[900px] lg:h-[700px] md:w-[600px] md:h-[400px] sm:w-[600px] sm:h-[340px] 2xl:h-[800px] xl:h-[800px] w-[400px] h-[240px]'>
            <Image src='/img/448866565.jpeg' fill='true' className='object-contain' />
        </div>

        <div className='flex mt-8 2xl:space-x-[200px] xl:space-x-[200px] lg:space-x-[190px] md:space-x-[170px] space-x-[40px]'>
            <p className='text-white flex items-center font-thin text-[14px]'><GroupIcon fill className='h-4 text-orange-500'/> 2-5 Игроков</p>  
            <p className='text-white flex items-center font-thin text-[14px]'><NotificationsActiveIcon fill className='h-4 text-orange-500'/> 2 Часа</p> 
            <p className='text-white text-[14px] flex items-center font-thin'><HomeIcon fill className='h-4 text-orange-500'/> ИчериШехер</p>
        </div>

        <p className='text-white mt-14 text-lg font-el 2xl:px-[160px] xl:px-[160px] lg:px-[60px] md:px-[80px] px-[20px]'>Вы находитесь в самом центре города Баку, а Ичери Шехер является его сердцем,где вам предоставлен наш квест. <br/> 
        Но есть одна маленькая проблема, вы находитесь под контролем одной разведки, которая следит за каждым вашим ходом и правильным ответом. <br />
        Вы должны найти послания, которые Старый Город оставил вам ещё с древних времён. <br/>
        Сможете ли вы разгадать все тайны и остаться незамеченными? <br /> <br /> 
        Правила прохождения игры: <br /> <br />
        <span className='underline'>Количество игроков.</span> <br /> <br />
        Наши квесты вы можете проходить как и в компании самого себя,так и с компанией своих друзей,коллег,семьи и т.д. <br />
        Максимальное количество игроков-6. <br /> <br />
        <span className='underline'>Временное ограничение.</span> <br /> <br />
        Время прохождения квеста по городу всегда индивидуально .Все зависит от того,будете ли вы делать различные остановки,сколько человек в вашей команде и т.д. <br/>
        В среднем время прохождения квеста по городу занимает от 1,5 часов. <br/>
        Доступ к квесту предоставлен вам на 24 часа,но мы уверены,что вы справитесь с этим быстрее и попадёте в топ наших игроков! <br /> <br />
        <span className='underline'>Прохождение заданий.</span> <br /> <br />
        Наш квест не рассчитан на использование мелких объектов,которые вы можете не заметить или же объекты ,которые не имеют стабильного размещения. <br />
        При затруднённости прохождения заданий вас будут ждать подсказки,которые будут находится в верхнем правом углу экрана.Так же обратите внимание на интересные факты,они так же могут помочь вам пройти задание. <br/> <br/>
        При технических проблемах, мы всегда готовы вам помочь. <br/>
        Наши контактные номера,электронная почта и другие социальные сети предоставлены на сайте. <br/> <br />
        Приятной игры!
        
        </p>
       </div>

       <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20'>
           <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mr-10 mt-10'>
                <Image src='/img/1481921321.jpeg' alt='photo' fill='true' className='object-cover' />
           </div>

            <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mt-10'>
                <Image src="/img/1202584322.jpeg" alt='photo' fill='true' className='object-cover'/>
            </div>

            <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mt-10'>
             <Image src="/img/1032471327.jpeg" alt='photo' fill='true' className='object-cover'/>
            </div>

            <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mt-10'>
                 <Image src="/img/739065300.jpeg" alt='photo' fill='true' className='object-cover'/>
            </div>

            <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mt-10'>
             <Image src="/img/1157034392.jpeg" alt='photo' fill='true' className='object-cover'/>
            </div>

            <div className='relative 2xl:w-80 xl:w-80 w-64 h-64 2xl:h-80 xl:h-80 mt-10'>
             <Image src="/img/1346647131.jpeg" alt='photo' fill='true' className='object-cover'/>
            </div>
       </div>
       <button
            onClick={() => {
              router.push("/");
            }}
            className="text-white bg-orange-500 shadow-md border font-bold mb-20 hover:bg-white hover:text-orange-500 active:scale-90 transition duration-150 uppercase w-36 p-4"
          >
            Buy
          </button>
    </div>
  )
}

export default InFootstepsOfOldCity