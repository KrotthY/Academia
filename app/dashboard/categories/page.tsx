"use client"
import { CardProgramaReview } from "@/app/ui/categories"
import { SlashIcon  } from "@radix-ui/react-icons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PublicRoutes } from "@/routes/routes"
import { Separator } from "@/components/ui/separator"


const CategoriesPage = () => {
  

  return(
    <>
    <div className="grid my-1 p-1 bg-cover bg-center h-40 w-full" style={{backgroundImage: "url('https://via.placeholder.com/200x147')"}}>
      <div className="col-span-1  lg:mt-2.5 flex flex-col  lg:gap-2 text-center items-center h-full">
        <div className="text-black p-2 text-lg md:text-2xl lg:text-4xl font-semibold leading-10 bg-gray-50 bg-opacity-50 rounded-full ">¿Qué son los programas?</div>
        <div className="text-black    p-4 text-sm md:text-md lg:text-lg font-normal leading-none my-5 lg:my-2  bg-gray-50 bg-opacity-50 rounded-full">
          Bienvenidos a los programas de capacitación, en este lugar encontraras todos los programas de la academia.
        </div>
      </div>
    </div>
    <div className="mx-20 mt-5 italic">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={PublicRoutes.HOME}>Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Categorias de programas</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    
    <div className="flex justify-end items-center m-20">
      <Select>
        <SelectTrigger className="w-[280px] shadow">
          <SelectValue placeholder="Selecciona un programa" />
        </SelectTrigger>
        <SelectContent className="bg-white shadow">
          <SelectGroup>
            <SelectLabel>Programas</SelectLabel>
            <SelectItem value="Administración">Administración</SelectItem>
            <SelectItem value="Transformación Digital">Transformación Digital</SelectItem>
            <SelectItem value="Tesorería">Tesorería</SelectItem>
            <SelectItem value="Contabilidad">Contabilidad</SelectItem>
            <SelectItem value="SIC">SIC</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div className="flex flex-wrap gap-24 justify-evenly items-center mx-20 mb-10 ">

      <CardProgramaReview title="Excel Avanzado" recommended={true} />
      <CardProgramaReview title="Word Básico" recommended={false} />
      <CardProgramaReview title="Seguridad de la Información" recommended={false} />
      <CardProgramaReview title="Atención al Cliente" recommended={false} />
      <CardProgramaReview title="Gestión del Tiempo" recommended={false} />
      <CardProgramaReview title="Manejo de Conflictos" recommended={true} />
      <CardProgramaReview title="Comunicación Efectiva" recommended={false} />
      <CardProgramaReview title="Liderazgo" recommended={true} />
      <CardProgramaReview title="Gestión de Proyectos" recommended={false} />
      <CardProgramaReview title="Ciberseguridad" recommended={true} />
      <CardProgramaReview title="Inteligencia Emocional" recommended={false} />
      <CardProgramaReview title="Gestión del Cambio" recommended={false} />
      <CardProgramaReview title="Desarrollo de Software" recommended={false} />
      <CardProgramaReview title="Marketing Digital" recommended={false} />
      <CardProgramaReview title="Recursos Humanos" recommended={true} />


    </div>

    </>
  )
}


export default CategoriesPage