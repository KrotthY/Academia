import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { cardPropsProgramada } from "@/interfaces/home"
import { FC } from "react"

const CardPrograma: FC<cardPropsProgramada> = ({title}) => {
  return (
    <>
      <Card className="w-52 h-52 relative">
      <CardContent className="p-0">
        {/* Posicionamiento relativo para el contenedor de la imagen */}
        <div className="relative">
          <Image alt="test" width={208} height={192} className="rounded-t-md" src="https://via.placeholder.com/200x147" />
          {/* Posicionamiento absoluto para el texto */}
          <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 rounded-t-md p-2">
            <div className="text-white text-base font-medium leading-none">
              Recomendado para tí
            </div>
          </div>
          <div className=" p-5 text-slate-900  text-base font-medium leading-none">
            { title }
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col">
        {/* Otro contenido del footer */}
      </CardFooter>
    </Card>
    </>
  )
}

export default CardPrograma