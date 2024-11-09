import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex screen gap-5 justify-between mt-10'>
        <div className='bg-red-400 w-[45%]  py-6 px-9 rounded-xl  '>
            <h2 className='text-2xl font-semibold bg-red-400'>0</h2>
            <h3 className='text-3xl font-medium bg-red-400'>New Task</h3>
        </div>
        <div className='bg-green-400 w-[45%] py-6 px-9 rounded-xl  '>
            <h2 className='text-2xl font-semibold bg-green-400'>0</h2>
            <h3 className='text-3xl font-medium bg-green-400'>New Task</h3>
        </div>
        <div className='bg-blue-400 w-[45%] py-6 px-9 rounded-xl  '>
            <h2 className='text-2xl font-semibold bg-blue-400'>0</h2>
            <h3 className='text-3xl font-medium bg-blue-400'>New Task</h3>
        </div>
        <div className='bg-yellow-400 w-[45%] py-6 px-9 rounded-xl  '>
            <h2 className='text-2xl font-semibold bg-yellow-400'>0</h2>
            <h3 className='text-3xl font-medium bg-yellow-400'>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
