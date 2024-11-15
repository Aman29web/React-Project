import React, { useContext, useEffect, useState } from 'react'
import Login from './componenets/Auth/Login'
import EmployeeDashboard from './componenets/Dashboaed/EmployeeDashboard'
import AdminDashboard from './componenets/Dashboaed/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
 
  const [user,setUser]=useState(null)
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      console.log(user)
    }else if(email=='user@me.com' && password=='123'){
      
        setUser('employee')
        console.log(user)

    }
    else{
      alert("Invalid Credentials")
    }

  }

  const data = useContext(AuthContext)
  console.log(data)
  

  return (
    <>
     {!user?<Login handleLogin={handleLogin}/> : ''}
     {user== 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
 
    </>
    
  )
}

export default App
