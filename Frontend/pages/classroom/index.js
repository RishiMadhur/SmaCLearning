import React from "react";
import Classcard from "./classcards";

const Classroom = () =>{
    // const data =[
    //     {id:1,class:}
    // ]
   return(
    <div className="flex flex-col">
    <div className="md:min-h-screen font-normal text-text dark:text-white bg-blue-pro md:w-full pl-20">
    <div className="pt-10 flex-row flex">
           <h1 className=" font-bold text-text1 text-lg" >Sma-c Classroom</h1>
      </div>
      <div className="flex flex-col bg-page md:w-4/5 md:h-screen">
            <div className="flex md:place-content-end">
            </div>
            <div className="p-5 space-y-2">
                <h1 className="text-sm text-text dark:text-white">On-going</h1>
                <Classcard/>
            </div>
            <div className="p-5 space-y-2">
                <h1 className="text-sm text-text dark:text-white">Upcoming</h1>
               <div className="flex space-x-10"> <Classcard/>
               <Classcard/></div>
            </div>
            <h1 className="pl-7 mb-3 text-sm dark:text-white">History</h1>
            <Classcard/>
        </div>
      </div>
      </div>

   );
}
 export default Classroom;