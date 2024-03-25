import Image from 'next/image'
import React from 'react'
import { HomeIcon, PersonIcon, MixIcon, RocketIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { PublicRoutes } from '@/routes/routes'

const Navbar = () => {

  


  return (
    <>
    <style>
        {`
          #menu-toggle:checked + #menu {
            display: block;
          }
        `}
    </style>
    <nav className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <a href="/" className="flex text-lg font-semibold">
        <Image
          src={"/img/grupo.png"} 
          width="150"
          height="150"
          alt="Grupo sycar"
        />
      </a>
    </div>
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
      <svg
        className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="text-xl font-medium text-center items-center lg:space-x-12 gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
          <li className="py-2 lg:py-0 ">
            <Link
              className=" flex justify-center items-center text-slate-800 hover:pb-0 hover:border-b-4 hover:border-orange-400"
              href={PublicRoutes.HOME}
            >
              <HomeIcon  className='mr-2 w-4 h-4'/>Inicio
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link
              className="flex justify-center items-center text-slate-800 hover:pb-0 hover:border-b-4 hover:border-orange-400"
              href={PublicRoutes.CATEGORIES}
            >
            <MixIcon  className='mr-2 w-4 h-4'/>  Categorias de Programas
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link
              className="flex justify-center items-center text-slate-800 hover:pb-0 hover:border-b-4 hover:border-orange-400"
              href={PublicRoutes.MY_LEARNING}
            >
            <RocketIcon  className='mr-2 w-4 h-4'/> Mi Aprendizaje
            </Link>
          </li>
    
          <li className="py-2 lg:py-0 ">
            <Link
              className="flex justify-center items-center text-slate-800 hover:pb-0 hover:border-b-4 hover:border-orange-400"
              href={PublicRoutes.MY_PROFILE}
            >
            <PersonIcon  className='mr-2 w-4 h-4'/>  Mi Perfil
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  </nav>
    </>
  )
}

export default Navbar