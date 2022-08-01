import React from "react";
import CollectInfo from "../components/CollectInfo";
import ResNavBar from "../components/ResNavBar";

const Resume: React.FC = () => {
  return (
    <div>
      <ResNavBar />
      <div className="flex w-full mt-[2vh]">
        <CollectInfo />
        <div className="w-5/12">
      </div>
      </div>
     
    </div>
  );
};

export default Resume;
