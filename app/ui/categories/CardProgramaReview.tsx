import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { RocketIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { FC } from "react"
import Link from "next/link"
import { PublicRoutes } from "@/routes/routes"
import { cardPropsProgramadaReview } from "@/interfaces/categoriesProgram"

const CardProgramaReview: FC<cardPropsProgramadaReview> = ({title,recommended}) => {

  return (
    <>
      <Card className="w-52 h-52 relative ">
      <CardContent className="p-0" >
        <div className="relative">
          <Image alt="test" width={208} height={192} className="rounded-t-md"  src="https://via.placeholder.com/200x147" />
          {recommended ? (
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 rounded-t-md p-2">
              <div className="text-white text-base font-medium leading-none flex justify-between px-1">
                <RocketIcon className=" h-5 w-5" /> Recomendado para tí 
              </div>
            </div>
          ) :  null}
          <div className=" py-3.5 px-[1px] text-slate-900 text-center align-middle text-base  leading-none">
            { title }
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col">
      <Link href={PublicRoutes.CATEGORY}>
        <Button variant="secondary">
          <OpenInNewWindowIcon className="mr-2 h-5 w-5" /> Revisa el programa
        </Button>
      </Link>
      </CardFooter>
      </Card>
    </>
  )
}

export default CardProgramaReview