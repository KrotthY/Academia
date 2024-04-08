import React from 'react'

const LearningPrograms = () => {
  return (
    <>
      <div className='flex flex-col  '>

      <h1 className='text-3xl text-center my-6 font-semibold'>Titulo del curso</h1>
      <div className='  grid grid-cols-1 lg:grid-cols-3 min-h-screen px-2 gap-2'>
        
        <div className='col-span-2 border-8 border-stone-200   rounded-sm flex justify-center items-center '>
          <div className='bg-black w-full h-full flex justify-center items-center'>
            <span className='text-white'>Reproductor</span>
          </div>
        </div>
        
        <div className='col-span-1 border-8 rounded-sm shadow border-stone-200 grid grid-rows-5'>
          <div className='row-span-1 border-red-500 border-8 grid grid-rows-3'>
            <div className='row-span-1 bg-green-300'>
              
              
            </div>
            <div  className='row-span-2 bg-green-900'>

            </div>

          </div>
          <div className='row-span-4 border-8 border-yellow-200'>

          </div>
        </div>

      </div>
      </div>
    
    
    </>
  )
}

export default LearningPrograms