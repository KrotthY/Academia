
import Image from "next/image"
import {CardDestacados, CardPrograma} from './ui/index/index';


export default function Page(){
  return(
    <>
      {/* header */}
      <div className="grid grid-cols-2 my-20 px-20 pt-10">
        <div className="col-span-1 flex flex-col items-start">
          <div className="text-black text-4xl font-semibold  leading-10 ">Portal Educativo </div>
          <div className=" text-black text-sm font-normal leading-none my-5">Bienvenidos a nuestra plataforma de capacitación, un espacio dedicado exclusivamente para que nuestros colaboradores puedan adquirir nuevas habilidades y conocimientos esenciales para su desarrollo profesional.</div>
        </div>
        <div className="col-span-1 flex justify-center ">
          <div className="w-72 h-12 px-4 py-3 bg-orange-400 rounded justify-center items-center inline-flex">
            <div className="text-slate-50 text-xl font-bold">Ingresa al portal</div>
          </div>
        </div> 
      </div>
      {/* header */}
      {/* Programas de cursos destacados */}
      <div className="bg-gray-50 w-full h-64">
        <label htmlFor="" className="text-xl  font-semibold px-20" >Programas - Cursos destacados</label>
        <div className="flex justify-evenly items-center content-center mt-6 mx-3 ">
          <CardDestacados title="Hola" description="chao"/>
        </div>
      </div>
      {/* Programas de cursos destacados */}

      {/* Selecciona tu programa */}
      <div className="flex justify-start items-start my-6 ">
        <div className="text-xl font-semibold px-20">Selecciona tu programa </div>
      </div>
      <div className="my-6 flex  justify-evenly items-center  ">
        <CardPrograma title="Quepaso"/>
        <CardPrograma title="Quepaso"/>
        <CardPrograma title="Quepaso"/>
        <CardPrograma title="Quepaso"/>
        <CardPrograma title="Quepaso"/>
      </div>
      {/* Selecciona tu programa */}

      {/* Programas  */}
      <div className="flex justify-start items-start my-6">
        <div className="text-slate-800 text-xl font-semibold leading-normal px-20">
          Programas
        </div>
      </div>

      <div className="my-6 flex  justify-evenly items-center ">
        <div className="w-56 h-12 relative bg-white rounded-2xl shadow-xl  border">
          <div className="left-[79px] top-[4px] absolute text-slate-800 text-sm font-normal leading-none">ciber seguridad</div>
          <div className="left-[92px] top-[27px] absolute text-slate-600 text-xs font-normal leading-3 tracking-widest">10 cursos</div>
          <Image alt="test" width={64} height={56} className="w-16 h-14 left-0 top-[-4px] absolute shadow" src="https://via.placeholder.com/69x56" />
        </div>
        <div className="w-56 h-12 relative bg-white rounded-2xl shadow-xl  border">
          <div className="left-[79px] top-[4px] absolute text-slate-800 text-sm font-normal leading-none">ciber seguridad</div>
          <div className="left-[92px] top-[27px] absolute text-slate-600 text-xs font-normal leading-3 tracking-widest">10 cursos</div>
          <Image alt="test" width={64} height={56} className="w-16 h-14 left-0 top-[-4px] absolute shadow" src="https://via.placeholder.com/69x56" />
        </div>
      </div>
      {/* Programas  */}

    </>
  )
}