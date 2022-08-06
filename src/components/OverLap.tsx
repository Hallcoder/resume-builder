import * as React from "react";
import { AiFillLayout } from "react-icons/ai";
import { GiDrinkMe } from "react-icons/gi";
import {
  MdOutlineTextFields,
  MdOutlineFullscreen,
  MdFormatAlignRight,
} from "react-icons/md";
import { IoMdText } from "react-icons/io";
const Overlap: React.FC = () => {
  let hoverable:string = 'hover:bg-slate-200 opacity-80 rounded-md h-5/6 hover:opacity-80'
  return (
    <div className="flex items-center bg-white text-2xl justify-around absolute bottom-2 ml-[1.6vw] border-black border rounded-md w-11/12 shadow-lg h-[8vh]">
      <div className="flex justify-start w-3/12">
        <AiFillLayout className="hover:bg-slate-200 hover:opacity-100 rounded-md   text-2xl m-1 opacity-70" />
      </div>
      <div className="flex w-4/12 justify-around">
        <IoMdText className={hoverable} />
        <MdOutlineTextFields className={hoverable} />
        <MdFormatAlignRight className={hoverable}/>
        <GiDrinkMe className={hoverable}/>
      </div>
      <div className="flex text-3xl w-2/12 justify-end">
        <MdOutlineFullscreen className={hoverable} />
      </div>
    </div>
  );
};

export default Overlap;
