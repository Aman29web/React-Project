import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext =createContext()

const AuthProvider = ({children}) => {
  
    const [userData,setUserData]=useState(null)

    set


  return (
    <div>
        <AuthContext.Provider value={"Aman"}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
