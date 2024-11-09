import React from 'react'
import Header from '../../other/Header'
import './AdminDashboard.css'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
       <CreateTask/>
       <AllTask/>
      
    </div>
  )
}

export default AdminDashboard
