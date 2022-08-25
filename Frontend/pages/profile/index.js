import React from "react";
//import Split from "react-split-pane";
import PersonalDetails from "/pages/personaldetails";
import AcademicDetails from "/pages/academicdetails";
import Achievements from "/pages/achievements";
import Others from "/pages/others";
import Image from "next/image";


const Profile = () =>{
   return(
    <div className="flex flex-col">
      <div className=" min-h-screen font-normal text-text bg-blue-pro md:w-full md:h-full pl-20">
      <div className="pt-10 flex-row flex">
           <h1 className="font-bold text-text1 text-lg">Profile</h1>
      </div>
            <div className="pl-12 pt-4 relative"> 
            <Image  src="/icons/right.svg" width="175px" height="175px" alt="head1"/>
            </div>
            <div className="pl-20 pt-6 pb-8 text-text">
               <h1 className="text-text1 text-lg">K.Sandhya</h1>
               <h2 className="text-xs text-text dark:text-white">4th year</h2>
               <h2 className="text-xs text-text dark:text-white">B-Tech, Computer Science & Engineering</h2>
               <h2 className="text-xs text-text dark:text-white">GMRIT,Rajam</h2>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 space-x-3 mr-20 ml-16 mb-auto">
  <PersonalDetails></PersonalDetails>
  <AcademicDetails></AcademicDetails>
</div>         
  <div className="min-h-screen font-normal text-text bg-blue-pro md:w-full md:h-full space-y-5 md:mt-10 md:pl-20 md:pr-20">
  <Achievements></Achievements>
  <Others></Others>
  </div>
</div>             
       </div>
   );
}

export default Profile;