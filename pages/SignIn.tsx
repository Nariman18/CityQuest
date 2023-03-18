import React from 'react'
import Head from 'next/head'
import LogIn from '../components/LogIn'

function SignIn() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

      <LogIn />
      
      </main>
    </div>
  )
}

export default SignIn