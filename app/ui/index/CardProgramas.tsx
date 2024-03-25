import { FC } from 'react'
import Image from 'next/image'
import { cardPropsProgramas } from '@/interfaces/home'

const CardProgramas:FC<cardPropsProgramas> = ({title,quatity}) => {
  return (
    <>

      <div className="w-56 h-12 relative bg-white hover:bg-gray-50  rounded shadow  border cursor-pointer">
        <div className="left-[79px] top-[4px] absolute text-slate-800 text-sm font-medium leading-none">{title}</div>
        <div className="left-[92px] top-[27px] absolute text-slate-600 text-xs font-medium leading-3 tracking-widest">{quatity} cursos</div>
        <Image alt="test" width={67} height={56} className=" -left-1 top-[-4px] absolute shadow hover:shadow-lg hover:opacity-65" src="https://via.placeholder.com/69x56" />
      </div>
    </>
  )
}

export default CardProgramas