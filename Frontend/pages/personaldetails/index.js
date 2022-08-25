import React from "react";
import Image from "next/image";
import PersonalData from "./personaldata";

const PersonalDetails = () =>{
    const Data = PersonalData;
return(
<div className="row-span-3 ... rounded-2xl bg-blue-light pb-10 col-span-1">
<div className="flex pl-10 pt-14 pb-5 justify-center">
<Image src="/icons/personal.svg" width="20px" height="20px" alt="Personal"/>
<h1 className="text-xs text-white pl-4">Personal Details</h1>
</div>
{Data.slice(0,1).map((value)=>(
        <div key={value.Id} className="ml-12 mt-2">
<h1 className="text-blue-light-pro">Father Name:</h1>
<h1 className="text-white pl-10">{value.FatherName}</h1>
<h1 className="text-blue-light-pro">Mother Name:</h1>
<h1 className="text-white pl-10">{value.MotherName}</h1>
<h1 className="text-blue-light-pro">Phone no:</h1>
<h1 className="text-white pl-10">{value.PhoneNo}</h1>
<h1 className="text-blue-light-pro">Email:</h1>
<h1 className="text-white pl-10">{value.Email}</h1>
<h1 className="text-blue-light-pro">Date Of Birth:</h1>
<h1 className="text-white pl-10">{value.DOB}</h1>
<h1 className="text-blue-light-pro">Address:</h1>
<h1 className="text-white pl-10">{value.Address}</h1>
</div>
))}
</div>


);
}

export default PersonalDetails;