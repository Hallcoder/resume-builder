import React from "react";
import ex1 from '../assets/images/ex1.svg'
import ex2 from '../assets/images/ex2.svg'
import ex3 from '../assets/images/ex3.svg'
const Templates: React.FC = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-full w-10/12 ml-auto mr-auto flex overflow-x-scroll m-2 overflow-y-hidden">
        <div className="m-6 relative h-full">
          <img src={ex2} alt="" className="h-5/6  peer shadow-md border" />
          <button className='bg-blue-700 w-4/12 items-center justify-center text-white h-8 rounded-md bottom-6 left-36 absolute hidden peer-hover:flex hover:flex' >Use Template</button>
        </div>
        <div className="relative m-6 h-full">
          <img src={ex1} alt="" className=" h-full peer hover shadow-md  border" />
          <button className='bg-blue-700 w-4/12 items-center justify-center text-white h-8 rounded-md bottom-6 left-36 absolute hidden peer-hover:flex hover:flex' >Use Template</button>
        </div>
        <div className="relative m-6 h-full">
          <img src={ex3} alt="" className="h-5/6  peer shadow-md border" />
          <button className='bg-blue-700 w-4/12 items-center justify-center text-white h-8 rounded-md bottom-6 left-36 absolute hidden peer-hover:flex hover:flex' >Use Template</button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
