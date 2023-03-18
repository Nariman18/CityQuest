import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
         <Header />
         <Component {...pageProps} />
         <div className='bg-[#171717]'><Footer/></div>
         <section className='flex justify-center bg-[#171717]'>
         <span className='text-white p-6 font-thin text-sm'>&copy; 2023. All rights reserved.</span>
          <div></div>
         </section>
        </>
}

export default MyApp
