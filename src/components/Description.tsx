import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdOutlineMenu,
  MdFormatUnderlined,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
const Description: React.FC = () => {
  return (
    <div className="flex flex-col border border-black m-auto w-11/12 h-4/6 rounded-md">
      <div className="h-5/6 border-b-2 border-gray-500">
        <textarea
          name="description"
          id="description"
          className="border w-full h-full resize-none focus:outline-none focus:bg-slate-100 text-xl rounded-md"
          cols={60}
          rows={8}
        ></textarea>
      </div>
      <div className="w-5/12 justify-around flex text-3xl">
        <MdFormatBold />
        <MdFormatItalic />
        <MdFormatUnderlined />
        <AiOutlineOrderedList />
        <MdOutlineFormatListBulleted />
        <MdOutlineMenu />
      </div>
    </div>
  );
};

export default Description;
