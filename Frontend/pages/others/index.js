import React from "react";
import Image from "next/image";

const Others = () =>{
    const data=[{Id:1,OtherDetails:" "}];
    return(
        <div className="row-span-1 col-span-1 ... rounded-2xl bg-blue-light pl-10 pb-10">
        <div className="flex pl-4 pt-8 pb-4">
        <Image className="pl-4 pr-4" src="/icons/other.svg" width="15px" height="15px" alt="Personal"/>
        <h1 className="text-xs text-white pl-4">Personal Details</h1>
        {data.slice(0,1).map((value)=>(
        <h1 className="mr-auto " key={value.Id}>{value.OtherDetails}</h1>
        ))}
        </div>
        </div>
    );
}

export default Others;