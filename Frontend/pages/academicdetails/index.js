import React from "react";
import Image from "next/image";
import academicData from "./academicdata";

const AcademicDetails = () => {
  const data = academicData;
  return (
    <div className="w-min-full row-span-3 ...  rounded-2xl bg-blue-light pb-10 col-span-1">
      <div className="flex pt-14 justify-center pb-5 pl-40">
        <Image
          src="/icons/academic.svg"
          width="20px"
          height="20px"
          alt="Personal"
        />
        <h1 className="text-xs text-white dark:text-text pr-20 pl-4">Academic Details</h1>
      </div>
      {data.slice(0, 1).map((value) => (
        <div className="ml-10 mt-2" key={value.id}>
          <h1 className="text-blue-light-pro">Current Semester:</h1>
          <h1 className="text-white pl-20">{value.CurrentSem}</h1>
          <h1 className="text-blue-light-pro">Last Sem CGPA:</h1>
          <h1 className="text-white pl-20">{value.LastSemCGPA}</h1>
          <h1 className="text-blue-light-pro">Average CGPA:</h1>
          <h1 className="text-white pl-20">{value.AverageCGPA}</h1>
          <h1 className="text-blue-light-pro">No Of Backlogs:</h1>
          <h1 className="text-white pl-20">{value.NoOfBacklogs}</h1>
          <h1 className="text-blue-light-pro">Inter:</h1>
          <h1 className="text-white pl-20">{value.Inter}</h1>
          <h1 className="text-blue-light-pro">SSC</h1>
          <h1 className="text-white pl-20">{value.SSC}</h1>
        </div>
      ))}
    </div>
  );
};

export default AcademicDetails;
