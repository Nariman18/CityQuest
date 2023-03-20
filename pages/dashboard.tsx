import React from 'react'
import Head from 'next/head'
import LogIn from '../components/LogIn'
import { useRouter } from 'next/router'
import Header from '../components/Header'

function SignIn() {

    const router = useRouter()  
    
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

      <main>

      <h1>Welcome to your dashboard</h1>

      <button onClick={() => router.push('/')} className='mt-10 mb-10 bg-red-400 hover:bg-white p-4 border rounded-full transition duration-300 ease-in-out'>Log Out</button>
      
      
      </main>
    </div>
  )
}

export default SignIn