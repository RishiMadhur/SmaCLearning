import React from "react";

const Messages = () =>{
   return(
      <div className=" flex-col flex">
      <div className=" min-h-screen font-normal text-text bg-blue-pro md:w-full pl-20">
      <div className="pt-10 flex-row flex">
           <h1 className=" font-bold text-text1 text-lg">Messages</h1>
      </div>
      <div className="pt-10 flex-row flex">
           <h1 className=" font-normal text-sm">Emails:</h1>
      </div>
      <div className="flex gap-20 pl-20 pt-10">
         <a href="https://outlook.live.com/owa/" target="_blank">
         <img src="/icons/outlook.svg"  />
         </a>
         <a href="https://mail.google.com/mail/" target="_blank">
         <img className="pt-5" src="/icons/google.svg"  />
         </a>
      </div>
      </div>
            </div>
   );
}
 export default Messages;