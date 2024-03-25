
import { EnterIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export default function categoriesPage() {
  return(
    <>
      <div className="grid lg:grid-cols-2 my-20 px-2 lg:px-20 lg:pt-10">
        <div className="col-span-1 flex flex-col items-start">
          <div className="text-black text-3xl lg:text-4xl font-semibold  leading-10 ">¿Que son los programas? </div>
          <div className=" text-black text-sm lg:text-md font-normal leading-none my-12 lg:my-5">
            Bienvenidos a nuestra plataforma de capacitación, 
            un espacio dedicado exclusivamente para que nuestros colaboradores puedan adquirir 
            nuevas habilidades y conocimientos esenciales para su desarrollo profesional.</div>
        </div>
        <div className="col-span-1 flex justify-center ">
          <Image alt="test" 
          width={208} height={192} className="rounded-t-md"  
          
          src="https://via.placeholder.com/200x147" />
        </div> 
      </div>
    </>
  )
}