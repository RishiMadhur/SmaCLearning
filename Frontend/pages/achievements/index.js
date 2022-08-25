import React from "react";
import Image from "next/image";
const Achievements = () =>{
  const data=[{Id:1,achievements:" "}];
    return(
<div className="col-span-1 ... rounded-3xl bg-blue-light pl-10 pr-40 ">
  <div className="flex pl-10 pt-14 pb-5">
  <Image src="/icons/achievement.svg" width="20px" height="20px"
  alt="Personal"/>
  <h1 className="mr-auto text-white dark:text-text ">Achievements</h1>
  </div>
  {data.slice(0,1).map((value)=>(
   <div key={value.Id}>
      <h1>{value.achievements}</h1>
   </div>
   ))}
  </div>
  
    );
}

export default Achievements;