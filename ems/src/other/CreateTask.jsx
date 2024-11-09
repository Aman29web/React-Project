import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className='flex items-flex-start justify-between w-full  flex-wrap forma'>
                <div className='w-1/2'>

                <div className='d'>
                 <h3 className='title'>Task title</h3>
                <input type="text" placeholder='Make a UI design' className='in' /></div>   
                 <div className='d'> <h3 className='title'>Date</h3>
                <input type="date" className='in' /></div>
                <div className='d'> <h3 className='title'>Assign to</h3>
                <input type="text"  placeholder='Employee name' className='in'/></div>
               <div className='d'> <h3 className='title'>Category</h3>
               <input type="text"placeholder='design, dev,etc' className='in'/></div>
               
               </div>
              
                <div className='w-1/2 des'>
                <h3 className='title'>Description</h3>
                <textarea name="" id="" cols="30" rows="10" className='texta'></textarea>
                <button className='btn bg-green-400'>Create Task</button>

                </div>
               

            </form>
        </div>
  )
}

export default CreateTask
