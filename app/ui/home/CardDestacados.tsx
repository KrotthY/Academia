import React, { FC } from 'react'
import Image from 'next/image'





const CardDestacados: FC<cardProps> = ({title, description}) => {
  return (
    <>
      <div className="w-72 h-44 bg-white rounded-2xl justify-center items-start inline-flex">
        <div className="w-full h-full flex-col justify-center items-center inline-flex">
          <Image alt="test" width={122} height={176} className="rounded-s-lg "  src="https://via.placeholder.com/120x173" />
        </div>
        <div className="w-40 h-44 relative flex-col justify-start items-start flex">
          <div className="w-40 my-1 text-slate-800 text-2xl font-medium leading-7">{title}</div>
          <div className="w-40 h-20  text-black text-xs font-normal leading-3">
            
            {description}

          </div>
          <div className="flex items-end justify-end px-5">
            <div className="w-28 h-5 px-4 bg-orange-400 rounded-2xl flex justify-center items-center">
              <div className="text-slate-50 text-xs font-bold leading-3 tracking-wide">VER</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default CardDestacados