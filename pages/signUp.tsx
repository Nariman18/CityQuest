import React from 'react'
import Head from 'next/head'
import SignUp from '../components/SignUp'
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

      <SignUp />
      
      </main>
    </div>
  )
}

export default SignIn