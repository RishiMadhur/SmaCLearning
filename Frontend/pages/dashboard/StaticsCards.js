import React from 'react'
import Image from 'next/image'

function StaticsCards() {
  return (
    <div className='flex space-x-10 mt-12 ml-44'>
        <div className="bg-white dark:bg-transparent shadow-1 border rounded-xl p-5 md:h-96 md:w-160 border-grey-dark">
          <div className="pt-10 pl-10">
            <Image src="/icons/totalcls.svg" width="24px" height="24px" />
          </div>
          <div className="pt-6 pl-10 text-sm">30</div>
          <div className="pl-10 text-10 font-500">Tokens Won</div>
          <div className="pt-2 pl-10 text-sm">30</div>
        </div>
        <div className="bg-white dark:bg-transparent shadow-1 border rounded-xl p-5 md:h-96 md:w-160 border-grey-dark">
          <div className="pt-10 pl-10">
            <Image src="/icons/disabled.svg" width="24px" height="24px" />
          </div>
          <div className="pt-6 pl-10 text-sm">30</div>
          <div className=" pl-10 text-10 font-500">Tokens Won</div>
          <div className="pt-2 pl-10 text-sm">30</div>
        </div>
        <div className="bg-purple-700 dark:bg-transparent shadow-1 border rounded-xl p-5 md:h-96 md:w-160 border-grey-dark">
          <div className="pt-10 pl-10">
            <Image src="/icons/assign.svg" width="24px" height="24px" />
          </div>
          <div className="pt-6 pl-10 text-sm">30</div>
          <div className="pl-10 text-10 font-500">Tokens Won</div>
          <div className="pt-2 pl-10 text-sm">30</div>
        </div>
    </div>
  )
}

export default StaticsCards