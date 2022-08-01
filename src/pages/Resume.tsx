import React from "react";
import CollectInfo from "../components/CollectInfo";
import Preview from "../components/Preview";
import ResNavBar from "../components/ResNavBar";

const Resume: React.FC = () => {
  return (
    <div className="h-screen">
      <ResNavBar />
      <div className="flex w-full h-full mt-[9vh]">
        <CollectInfo />
        <Preview />
      </div>
     
    </div>
  );
};

export default Resume;
