import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="grid grid-cols-6  px-auto w-full px-20 pt-10">
      <div className="flex justify-start items-start col-span-1">
        <div className=" text-black text-base font-medium text-center leading-tight">logo</div>
      </div>
      <div className="flex justify-center items-center gap-5 col-span-4">
        <div className=" text-black text-base font-medium leading-tight">Inicio</div>
        <div className=" text-black text-base font-medium leading-tight">Mi Aprendizaje</div>
      </div>
      <div className="flex justify-center items-center col-span-1">
        <div className=" text-black text-base text-center font-medium leading-tight">login</div>
      </div>
    </div>
    </>
  )
}

export default Navbar