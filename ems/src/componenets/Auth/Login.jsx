import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        
         setEmail("")
         setPassword("")
    }
    



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
                  onSubmit={(e)=>{
                    submitHandler(e)
                  }}
            
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                    
                }}

                required type="email" placeholder='Enter your email' className='border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'/>
                <input 
                value={password}
                onChange={(e)=>{
                        setPassword(e.target.value)
                }}
                
                required type="password" placeholder='Enter password' className='mt-4 border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'/>
                <button className='border-none mt-5 border-2 rounded-full py-4 px-5 text-xl text-white outline-none bg-emerald-600 placeholder:text-white'>Log in</button>
            </form>
        </div>
       
      
    </div>
  )
}

export default Login
