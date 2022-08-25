import React from "react";
import { useRouter } from "next/router";
// import homeIcon from "/public/icons/home1.svg?url";
// import Image from "next/image";


const HomePage = () => {
const router = useRouter();
  return (
    <div className="p-10">
        <div>
            <img src="/icons/smartsolution.svg" width="200px" height="120px"/>
        </div>
      <div className="flex flex-row m-28">
        <div className="space-y-10 ">      
        <h1 className="font-700 text-blue-50 font-sans text-3xl">Welcome to <br></br>
        <span> Smart-Credit Learning</span></h1></div>
        <img src="/icons/home1.svg" width="380px" height="320px"  />
      </div>
      <div className="flex flex-row space-x-56">
        <button className="w-72 h-32  rounded-6 text-pink-300 bg-black" onClick={()=>{router.push('/facultylogin')}}>Faculty Login</button>
        <button className="w-72 h-32  rounded-6 text-pink-300 bg-black" onClick={()=>{router.push('/studentlogin')}}>Student Login</button>
      </div>
    </div>
  );
};

export default HomePage;
