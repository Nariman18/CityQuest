import React from 'react'
import Head from 'next/head'
import LogIn from '../components/LogIn'
import Header from '../components/Header'

function SignIn() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

      <main>

      <LogIn />
      
      </main>
    </div>
  )
}

export default SignIn