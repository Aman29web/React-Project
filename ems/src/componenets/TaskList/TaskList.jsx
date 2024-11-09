import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto'>
        <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5'>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold.'>Make a  youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia porro nihil nesciunt. Ipsam, rerum.</p>
        </div>

        <div className='h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold.'>Make a  youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia porro nihil nesciunt. Ipsam, rerum.</p>
        </div>

        <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold.'>Make a  youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia porro nihil nesciunt. Ipsam, rerum.</p>
        </div>

        <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5'>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold.'>Make a  youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia porro nihil nesciunt. Ipsam, rerum.</p>
        </div>
       



      
    </div>
  )
}

export default TaskList
