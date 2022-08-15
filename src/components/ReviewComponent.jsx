import React from "react";
function ReviewComponent({ image, job, content, name }) {
  return (
    <div className="bg-[#2E2E33] flex flex-col rounded-md h-[45vh] m-4 w-4/12">
      <div className="flex flex-col items-center justify-center w-full">
        <img src={image} alt="person" className="rounded-full"/>
        <h1 className="text-xl font-bold text-white">{name}</h1>
        <h3 className="text-lg font-semibold text-[#9B9BA0]">{job}</h3>
      </div>
      <div className="text-white">
        <p className="font-semibold text-center text-lg">"{content}"</p>
      </div>
    </div>
  );
}

export default ReviewComponent;
