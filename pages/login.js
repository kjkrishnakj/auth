import React, { useEffect } from 'react'

import Link from 'next/link'
import logo from "../public/logo.png"
import Image from 'next/image';
import Head from "next/head";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({darkMode}) => {
  const router = useRouter()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleChange = (e) => {

    if (e.target.name == 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()

    setEmail('')
    setPassword('')

    if (response.success) {
      localStorage.setItem('token', response.token)
      localStorage.setItem('email', email);



      setTimeout(() => {
        
        router.push('/home')
      }, 1000)
    toast.success("Logged in successfully 👍", { autoClose: 1000 })

    }
    else {
      toast.error("Invalid Credentials! 🥲", { autoClose: 1000 })

    }
  }
  return (
    <div>
      <ToastContainer />
      
      <Head><title>Auth | Login</title></Head>
      <div className={`min-h-screen py-10bg-gray-900 text-white'}`}>
        <div className="mt-1  sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative mx-auto text-xl h-24 w-22 bg-white rounded-full flex items-center justify-center">
            <Image className="mx-auto text-xl" src={logo} alt="" style={{ width: '13rem' }} />

          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Log in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${darkMode ? ' text-white' : ' text-gray-900'} `}>Email address</label>
              <div className="mt-2">
                <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${darkMode ? ' text-white' : ' text-gray-900'} `}>Password</label>
              </div>
              <div className="mt-2">
                <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
               
            </div>

            <div>
              <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Signup</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
