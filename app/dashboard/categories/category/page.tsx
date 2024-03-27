import { RocketIcon,Crosshair2Icon,VercelLogoIcon, DrawingPinFilledIcon, OpenInNewWindowIcon, BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { PublicRoutes } from '@/routes/routes'
import { Button } from '@/components/ui/button';

const category = () => {
  return (
    <>
  
      <div className="grid w-full grid-cols-1 md:grid-cols-3 py-0 gap-0 md:gap-4 mt-20 px-2  lg:px-10">
        <div className="flex justify-center  w-full h-full col-span-1">
          <Image
            src="https://images.pexels.com/photos/7129137/pexels-photo-7129137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full  rounded-lg "
            alt="prod5"
            width={400} height={200}
          />
        </div>
        <div className="col-span-2 grid grid-cols-1 grid-rows-2 w-full h-full gap-2">
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl lg:text-3xl font-bold italic'> Excel Avanzado</h1>
            <Separator className="my-4" />
            <span className='my-0 lg:my-6 text-base lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et laborum voluptatum nulla earum, praesentium voluptas provident sed odio nobis expedita sint sunt cum enim, itaque accusamus recusandae eum! Sapiente.
            </span>
          </div>
          <div className='flex lg:flex-row flex-col items-start lg:items-center justify-start lg:justify-between gap-6 mx-10 lg:gap-12'>
            <div className='w-full flex flex-col items-start lg:items-center justify-center '>
              <h1 className=' text-base font-semibold flex items-center gap-2'><Crosshair2Icon className='w-6 h-6'/> Objetivos del programa </h1>
              <article className='my-2'>
                <span className='flex  items-center gap-2 italic'><DrawingPinFilledIcon className='w-4 h-4'/> Dominio en excel</span>
                <span className='flex  items-center gap-2 italic'><DrawingPinFilledIcon className='w-4 h-4'/>Practica </span>
                <span className='flex  items-center gap-2 italic'><DrawingPinFilledIcon className='w-4 h-4'/>Conocimientos</span>
              </article>

            </div>
            <div className='w-full flex flex-col items-start lg:items-center justify-center'>
              <h1 className='text-base font-semibold flex items-center gap-2'><RocketIcon className='w-6 h-6'/> Progreso actual</h1>
              <div className='w-full my-4 mx-auto'>
                <Progress value={24} className="w-full" />
              </div>
              <div className='text-center'>
                <span className='italic text-base'>
                  El progreso actual del curso, cuando se encuentre al 100% estara disponeble el quiz
                  para poder realizarlo y dar por completado el curso.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='mx-10'>
        <div className="flex justify-center items-center mt-20 lg:mx-20">
          <h3 className='text-xl font-semibold flex items-center gap-2'><BookmarkFilledIcon className='w-8 h-8' /> Contenido del curso - Excel Avanzado</h3> 
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger> 
              <div className='flex items-center gap-2'>
                <VercelLogoIcon className='h-5 w-5'/>Análisis de datos
              </div>
            </AccordionTrigger>
            <AccordionContent>
            Introducción a funciones avanzadas como BUSCARV, BUSCARH, y funciones de base de datos. También incluiría el análisis de datos utilizando tablas dinámicas y gráficos dinámicos para extraer información significativa de grandes conjuntos de datos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger> 
              <div className='flex items-center gap-2'>
                <VercelLogoIcon className='h-5 w-5'/>Automatización con macros
              </div>
            </AccordionTrigger>
            <AccordionContent>
            Aprender a grabar y editar macros para automatizar tareas repetitivas en Excel. Incluiría la creación de botones de comando y formularios para ejecutar las macros, así como técnicas para depurar y solucionar problemas en los scripts de macro.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> 
              <div className='flex items-center gap-2'>
                <VercelLogoIcon className='h-5 w-5'/>Modelado y análisis financiero
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Explorar técnicas avanzadas para el modelado financiero, incluyendo la creación de modelos de flujo de efectivo, valoración de activos, análisis de sensibilidad y escenarios, y uso de funciones financieras complejas para calcular tasas de interés, pagos de préstamos, y más.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger> 
              <div className='flex items-center gap-2'>
                <VercelLogoIcon className='h-5 w-5'/>Integración de datos externos
              </div>
            </AccordionTrigger>
            <AccordionContent>
            Aprender a importar datos de fuentes externas como bases de datos SQL, archivos de texto delimitado, y sitios web, utilizando funciones como IMPORTDATA e IMPORTXML. También se abordarían técnicas para limpiar y transformar datos importados mediante el uso de fórmulas y herramientas de análisis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger> 
              <div className='flex items-center gap-2'>
                <VercelLogoIcon className='h-5 w-5'/>Visualización avanzada
              </div>
            </AccordionTrigger>
            <AccordionContent>
            Explorar técnicas avanzadas de visualización de datos utilizando funciones de formato condicional, gráficos personalizados y complementos adicionales como Power View y Power Map. También se incluiría la creación de paneles de control interactivos y tableros de mandos para presentar datos de manera efectiva a diferentes audiencias.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex justify-center items-center my-10 lg:mx-20">
        <Link href={PublicRoutes.LEARNING_PROGRAMS}>
          <Button className='bg-orange-400 hover:bg-orange-300 text-lg font-medium px-24  h-12'>
            <OpenInNewWindowIcon className="mr-2 h-8 w-8" />Comienza a realizar el curso ahora
          </Button>
        </Link>
      </div>


    </>
  )
}

export default category