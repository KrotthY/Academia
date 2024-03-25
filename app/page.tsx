"use client";

import Image from "next/image"
import {CardDestacados, CardPrograma, CardProgramas} from './ui/index/index';
import { EnterIcon } from "@radix-ui/react-icons"


export default function Page(){
  return(
    <>
      {/* header */}
      <div className="grid lg:grid-cols-2 my-20 px-2 lg:px-20 lg:pt-10">
        <div className="col-span-1 flex flex-col items-start">
          <div className="text-black text-3xl lg:text-4xl font-semibold  leading-10 ">Portal Educativo </div>
          <div className=" text-black text-sm lg:text-md font-normal leading-none my-12 lg:my-5">Bienvenidos a nuestra plataforma de capacitación, un espacio dedicado exclusivamente para que nuestros colaboradores puedan adquirir nuevas habilidades y conocimientos esenciales para su desarrollo profesional.</div>
        </div>
        <div className="col-span-1 flex justify-center ">
          <div className="w-72 h-12 px-4 py-3 bg-orange-400 rounded justify-center items-center inline-flex">
            <div className="flex  text-slate-50 text-base lg:text-xl font-bold">
              <EnterIcon className="mr-2 h-6 w-6" /> Ingresa al portal
            </div>
          </div>
        </div> 
      </div>
      {/* header */}
      {/* Programas de cursos destacados */}
      <div className="bg-gray-50 w-full h-auto mb-10">
        <div className="flex lg:justify-start justify-center items-start my-6 ">
          <div className="text-slate-800 text-xl lg:text-2xl font-semibold  md:px-10 lg:px-20">Cursos destacados</div>
        </div>
        <div className="flex flex-wrap gap-24 justify-evenly items-center mt-6 mx-3 pb-10 lg:pd-0">
          <CardDestacados title="Excel avanzado" description="descripcion de destacadossas  sdsaasd  sdadasda  asdkjasjkdsa  jkkasjdjkas  aksdjkkasjd  "/>
          <CardDestacados title="SIC modulo cajas" description="descripcion de destacados"/>
          <CardDestacados title="Portal OIRS" description="descripcion de destacados"/>
        </div>
      </div>
      {/* Programas de cursos destacados */}

      {/* Selecciona tu programa */}
      <div className="flex lg:justify-start justify-center items-start my-6 ">
        <div className="text-slate-800 text-xl lg:text-2xl font-semibold  md:px-10 lg:px-20">Selecciona tu programa </div>
      </div>
      <div className="flex flex-wrap gap-24 justify-evenly items-center  ">
        <CardPrograma title="Programa numero 1" recommended={true} />
        <CardPrograma title="Programas + " recommended={false} />
        <CardPrograma title="Programas + " recommended={false} />
        <CardPrograma title="Programas + " recommended={false} />
        <CardPrograma title="Programas + " recommended={false} />
        <CardPrograma title="Programas + " recommended={false} />
      </div>
      {/* Selecciona tu programa */}

      {/* Programas  */}
      <div className="flex justify-start items-start mt-28">
        <div className="text-slate-800 text-xl lg:text-2xl font-semibold leading-normal px-20 ">
          Programas
        </div>
      </div>
      <div className="my-12 flex flex-wrap justify-center gap-4 items-center mx-1">
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      <CardProgramas  title="Otro title" quatity={2}/>
      </div>
      {/* Programas  */}

    </>
  )
}