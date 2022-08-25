import React from "react";
import Image from "next/image";

function TokenCards() {
  return (
    <>
      <div className="space-y-10 mt-20">
        <div className="bg-white dark:bg-transparent shadow-1 rounded-xl p-5 md:h-96 md:w-160 border-grey-dark">
          <div className="pt-10 pl-10">
            <Image src="/icons/tokenwon.svg" width="24px" height="24px" />
          </div>
          <div className="pt-8 pl-10 text-10 font-500">Tokens Won</div>
          <div className="pt-8 pl-10 text-sm">30</div>
        </div>
        <div className="bg-white dark:bg-transparent shadow-1 rounded-xl p-5 md:h-96 md:w-160 border-grey-dark">
          <div className="pt-10 pl-10">
            <Image src="/icons/tokenlost.svg" color="menu" width="24px" height="24px" />
          </div>
          <div className="pt-8 pl-10 text-10 font-500">Penality Tokens</div>
          <div className="pt-8 pl-10 text-sm">30</div>
        </div>
        <div className="bg-white border rounded-xl shadow-1 p-5 md:h-44 flex md:w-160 border-grey-dark">
          <div className="pt-8 pl-10">
            <Image src="/icons/smac.svg" width="24px" height="24px" />
          </div>
          <div>
          <div className="pl-20 text-10 text-black font-500">Total Tokens</div>
          <div className="pl-20 text-black text-sm">500</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenCards;
