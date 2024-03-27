import React, { FC } from 'react'
import Image from 'next/image'
import { cardProps } from '@/interfaces/home'
import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"
import { OpenInNewWindowIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { PublicRoutes } from '@/routes/routes'

const CardDestacados: FC<cardProps> = ({title, description}) => {
  return (
    <>
      <div className="w-72 h-44 bg-white rounded-2xl justify-center items-start inline-flex">
        <div className="w-full h-full flex-col justify-center items-center inline-flex">
          <Image alt="test" width={122} height={176} className="rounded-s-lg "  src="https://via.placeholder.com/120x173" />
        </div>
        <div className="w-40 h-44 relative flex-col justify-start items-start flex">
          <div className="w-40 my-1 text-slate-800 text-lg lg:text-xl font-medium leading-7 italic">{title}</div>
          <ScrollArea  className="h-full text-xs w-full  p-1">
            {description}
          </ScrollArea>
          <div className="w-full flex justify-center pb-1">
            <Link href={PublicRoutes.CATEGORY}>
              <Button className='bg-orange-400 hover:bg-orange-300 px-6  h-8'>
                <OpenInNewWindowIcon className="mr-2 h-5 w-5" />Ver
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardDestacados