import React from "react";
import LineChart from "./LineChart";
import StaticsCards from "./StaticsCards";
import TokenCards from "./TokenCards";
//import Split from "react-split-pane";

const Dashboard = () => {
  return (
    <div className=" flex-col flex">
      <div className=" min-h-screen font-bold text-text dark:text-white bg-blue-pro md:w-full pl-20">
        <div className="pt-10 flex-row flex">
          <h1 className=" font-bold text-text1 text-lg">Welcome, Sandhya</h1>
        </div>
        <div className="flex">
          <TokenCards />
          <div>
            <LineChart />
            <StaticsCards />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
