
import Image from "next/image"
 
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import CardDestacados from "./ui/home/CardDestacados"



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
        <div className="flex justify-evenly items-center content-center mt-6   mx-3 ">
          <CardDestacados title="Hola" description="chao"/>
          <div className="w-72 h-44 bg-white rounded-2xl justify-center items-start inline-flex">
            <div className="w-full h-full flex-col justify-center items-center inline-flex">
              <Image alt="test" width={122} height={176} className="rounded-s-lg "  src="https://via.placeholder.com/120x173" />
            </div>
            <div className="w-40 h-44 relative flex-col justify-start items-start flex">
              <div className="w-40 my-1 text-slate-800 text-2xl font-medium leading-7">Siguiente texto</div>
              <div className="w-40 h-20  text-black text-xs font-normal leading-3">
                descripción de lo que se busca enseñar
                descripción de lo que se busca enseñar

              </div>
              <div className="flex items-end justify-end px-5">
                <div className="w-28 h-5 px-4 bg-orange-400 rounded-2xl flex justify-center items-center">
                  <div className="text-slate-50 text-xs font-bold leading-3 tracking-wide">VER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Programas de cursos destacados */}
      {/* Selecciona tu programa */}
      <div className="flex justify-start items-start my-6 ">
        <div className="text-xl font-semibold px-20">Selecciona tu programa </div>
      </div>

      <div className="my-6 flex  justify-evenly items-center  ">
        <Card className="w-52 h-52">
          <CardHeader className="p-0">
            Recomendado para tí
          </CardHeader>
          <CardContent className="p-0">
            <Image alt="test" width={208} height={192} src="https://via.placeholder.com/200x147" />
          </CardContent>
          <CardFooter className="p-2 flex flex-col ">
            <div className=" text-slate-900  text-base font-medium leading-none">
            Administración
            </div>
          </CardFooter>
        </Card>
        <Card className="w-52 h-52">
          <CardContent className="p-0">
            <Image alt="test" width={208} height={192} className="rounded-t-md" src="https://via.placeholder.com/200x147" />
          </CardContent>
          <CardFooter className="p-4 flex flex-col ">
            <div className=" text-slate-900  text-base font-medium leading-none">
            Transformación Digital
            </div>
          </CardFooter>
        </Card>
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