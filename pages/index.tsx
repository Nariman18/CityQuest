import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Banner2 from '../components/Banner2'
import JoyCard from '../components/JoyCard'
import KnowledgeCard from '../components/KnowledgeCard'
import EmotionsCard from '../components/EmotionsCard'
import AvailabilityCard from '../components/AvailabilityCard'
import BonusesCard from '../components/BonusesCard'
import GameGuide from '../components/GameGuide'
import HowToUse from '../components/HowToUse'
import ChooseYourGame from '../components/ChooseYourGame'
import RatingCards from '../components/RatingCards'





const Home: NextPage = () => {
  return (
    <div className="bg-[#171717]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />  

      <main className='mx-auto px-8 sm:px-16 '>

      <section className="pt-6 flex flex-col pb-6 bg-[#171717]">
            <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-xl font-yeseva mb-14 mt-12 uppercase text-center flex items-center justify-center text-orange-500">Почему Стоит Выбрать CITYQUEST?</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-10 font-teko">
            <JoyCard />
            <KnowledgeCard />
            <EmotionsCard />
           
            </div>

            <div className='grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-col-1 sm:grid-col-1 font-teko mb-5'>
            <AvailabilityCard />
            <BonusesCard />
            </div>
        </section>

        <section className='bg-[#232323] max-w-full'>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:gird-col-2 md:space-x-8 lg:space-x-1 sm:space-x-4 font-teko lg:mr-10'>
        
        <GameGuide />
        <HowToUse />

        </div>


        </section>

         
          
        <section className='mb-10 flex flex-col items-center'>

         <ChooseYourGame /> 
         
        <button className='text-white bg-orange-500 shadow-md border mt-14 font-bold my-3 hover:bg-white hover:text-orange-500 active:scale-90 transition duration-150 uppercase w-36 p-4'>Все Квесты</button>
        </section>


       
      </main>
      <Banner2 />


      <section className='bg-[#232323]'>

        <RatingCards />

      </section>

     

    </div>
  )
}

export default Home
 