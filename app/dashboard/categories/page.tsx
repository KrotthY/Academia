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
import { PublicRoutes } from "@/routes/routes"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { Button } from "@/components/ui/button"
 
type Status = {
  value: string
  label: string
}
 
const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]



const CategoriesPage = () => {
  
  const [open, setOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)




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
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Status</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      console.log(value)
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null
                      )
                      setOpen(false)
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    <div className="mx-20 mt-5">
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

    <div className="flex flex-wrap gap-24 justify-evenly items-center m-20 ">

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