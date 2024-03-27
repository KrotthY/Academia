"use client";

import { EnterIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"

import { CardDestacados, CardPrograma, CardProgramas } from "./ui/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PublicRoutes } from "@/routes/routes";


export default function Page(){
  return(
    <>
      {/* header */}
      <div className="grid lg:grid-cols-5 my-20 px-2 lg:px-20 lg:pt-10">
        <div className="col-span-2 flex flex-col items-start">
          <div className="text-black text-3xl lg:text-4xl font-semibold  leading-10 ">Portal Educativo </div>
          <div className=" text-black text-sm lg:text-md font-normal leading-none my-12 lg:my-5">Bienvenidos a nuestra plataforma de capacitación, un espacio dedicado exclusivamente para que nuestros colaboradores puedan adquirir nuevas habilidades y conocimientos esenciales para su desarrollo profesional.</div>
        </div>
        <div className="col-span-1 flex justify-center items-center h-full  ">
          <Separator decorative orientation="vertical"/>
        </div>
        <div className="col-span-2 flex justify-center ">
          <div className="w-72 h-12 px-4 py-3 bg-orange-400 rounded justify-center items-center inline-flex">
            <div className="flex  text-slate-50 text-base lg:text-xl font-bold">
              <EnterIcon className="mr-2 h-6 w-6" /> Ingresa al portal
            </div>
          </div>
        </div> 
      </div>
      {/* header */}
      {/* Programas de cursos destacados */}
      <div className="bg-gray-50 w-full h-auto ">
        <div className="flex lg:justify-start justify-center items-start my-6 ">
          <div className="text-slate-800 text-xl lg:text-2xl font-semibold  md:px-10 lg:px-20">Programas destacados</div>
        </div>
        <div className="flex flex-wrap gap-24 justify-evenly items-center mt-6 mx-3 pb-10 lg:pd-0">
          <CardDestacados title="Excel avanzado" description="descripcion de destacadossas  sdsaasd  sdadasda  asdkjasjkdsa  jkkasjdjkas  aksdjkkasjd  "/>
          <CardDestacados title="SIC modulo cajas" description="descripcion de destacados"/>
          <CardDestacados title="Portal OIRS" description="descripcion de destacados"/>
        </div>
      </div>
      {/* Programas de cursos destacados */}

      {/* Selecciona tu programa */}
      <div className="flex lg:justify-start justify-center items-start my-12 ">
        <div className="text-slate-800 text-xl lg:text-2xl font-semibold  md:px-10 lg:px-20">Revisa algunos programas </div>
    
      </div>
      <div className="flex flex-wrap gap-24 justify-evenly items-center  lg:mx-20">
        <CardPrograma title="Excel Avanzado" recommended={true} />
        <CardPrograma title="Seguridad de la Información" recommended={false} />
        <CardPrograma title="Atención al Cliente" recommended={true} />
        <CardPrograma title="Gestión del Tiempo" recommended={false} />
        <CardPrograma title="Manejo de Conflictos" recommended={true} />
        <CardPrograma title="Comunicación Efectiva" recommended={false} />
      </div>
      <div className="flex justify-center lg:justify-end items-center mt-20 lg:mx-20">
        <Link href={PublicRoutes.CATEGORIES}>
          <Button className='bg-orange-400 hover:bg-orange-300 px-6  h-8'>
            <OpenInNewWindowIcon className="mr-2 h-6 w-6" />Ver todos los programas
          </Button>
        </Link>
      </div>
      {/* Selecciona tu programa */}
      <Separator className="my-12" />
      {/* Programas  */}
      <div className="flex justify-start items-start ">
        <div className="text-slate-800 text-xl lg:text-2xl font-semibold leading-normal px-20 ">
          Áreas
        </div>
      </div>
      <div className="my-12 flex flex-wrap justify-center gap-4 items-center mx-1">
      <CardProgramas  title="Transformación Digital" quatity={2}/>
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