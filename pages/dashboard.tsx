import React from 'react'
import Head from 'next/head'
import LogIn from '../components/LogIn'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { useAuth } from '../context/AuthContext'
import UserDashboard from '../components/UserDashboard'

function SignIn() {

    const router = useRouter()  

    const { logout } = useAuth()
    
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

      <main>

      <UserDashboard />

     
      
      
      </main>
    </div>
  )
}

export default SignIn