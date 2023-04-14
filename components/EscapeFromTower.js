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
       <p className='uppercase text-white absolute 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold'>Побег из Крепости</p>
       </div>

       <div className='flex flex-col justify-center items-center mt-14'>

        <div className='relative 2xl:w-[1200px] xl:w-[1200px] lg:w-[900px] lg:h-[700px] md:w-[600px] md:h-[400px] sm:w-[600px] sm:h-[340px] 2xl:h-[800px] xl:h-[800px] w-[400px] h-[240px]'>
            <Image src='/img/IcheriSheher.jpeg' fill='true' className='object-contain' />
        </div>

        <div className='flex mt-8 2xl:space-x-[200px] xl:space-x-[200px] lg:space-x-[190px] md:space-x-[170px] space-x-[50px]'>
            <p className='text-white flex items-center font-thin text-[14px]'><GroupIcon fill className='h-4 text-orange-500'/> 2-5 Игроков</p>  
            <p className='text-white flex items-center font-thin text-[14px]'><NotificationsActiveIcon fill className='h-4 text-orange-500'/> 2 Часа</p> 
            <p className='text-white text-[14px] flex items-center font-thin'><HomeIcon fill className='h-5 text-orange-500'/> IcheriSheher</p>
        </div>

        <p className='text-white mt-14 text-lg font-el 2xl:px-[160px] xl:px-[160px] lg:px-[60px] md:px-[80px] px-[20px]'>Красота Старого Города никого не может оставить равнодушным,но кто же знал ,что такая красота не только очаровывает,но и пленит?!<br/> 
        Вы ,оказавшись с Старом Городе сами того не подозревая становитесь заложником...<br />
        Ичяри-Шехер одно из самых загадочных мест на планете,город хранит в себе много тайн ,которые вам следует разгадать.<br/>
        Но это будет слишком непросто,ведь вы находитесь под бдительным контролем местных,которые не очень любят любопытных чужаков.... <br /> <br/>
        В ходе игры-квеста «Побег из крепости » у вас будет возможность примерить на себя роль заложников,у которых единственный выход-бежать. Сможете ли вы разгадать все тайны старого города,или же навсегда останетесь в плену его загадочности и тайн?<br /> <br />
        Правила прохождения игры:<br /> <br />
        <span className='underline'>Количество игроков.</span> <br /> <br />
        Наши квесты вы можете проходить как и в компании самого себя,так и с компанией своих друзей,коллег,семьи и т.д. <br />
        Максимальное количество игроков-6.<br/> <br />
        <span className='underline'>Временное ограничение.</span> <br/> <br />
        Время прохождения квеста по городу всегда индивидуально .Все зависит от того,будете ли вы делать различные остановки,сколько человек в вашей команде и т.д. <br />
        В среднем время прохождения квеста по городу занимает от 1,5 часов. <br />
        Доступ к квесту предоставлен вам на 6 часов,но мы уверены,что вы справитесь с этим быстрее и попадёте в топ наших игроков! <br /> <br />
        <span className='underline'>Прохождение заданий.</span> <br /> <br />
        Наш квест не рассчитан на использование мелких объектов,которые вы можете не заметить или же объекты ,которые не имеют стабильного размещения. <br />
        При затруднённости прохождения заданий вас будут ждать подсказки,которые будут находится в верхнем правом углу экрана.Так же обратите внимание на интересные факты,они так же могут помочь вам пройти задание. <br /> <br />
        При технических проблемах,мы всегда готовы вам помочь. <br/>
        Наши контактные номера,электронная почта и другие социальные сети предоставлены на сайте. <br/> <br/>
        Приятной игры! <br /> <br/>
        А самое приятное,что при приобретение нашего квеста вы получаете не только незабываемые эмоции и впечатления,но и приятные бонусы! <br/>
        «Le cafe» заведение в Ичяри-Шехер,которое предоставляет 20% скидку всем участникам нашего квеста! <br/>
        Между прохождениями заданий или после прохождения квеста,вы можете порадовать себя приятной атмосферой ,вкусными блюдами и настольными играми! <br/>
        Отдохнуть ,но при этом сохранить все веселье! <br/>
        Адрес: Saftar Quliyev 7 Baku, Azerbaijan
        </p>
       </div>

       <button
            onClick={() => {
              router.push("/");
            }}
            className="text-white bg-orange-500 shadow-md border font-bold mb-20 mt-20 hover:bg-white hover:text-orange-500 active:scale-90 transition duration-150 uppercase w-36 p-4"
          >
            Buy
          </button>

    </div>
  )
}

export default InFootstepsOfOldCity