import React, { useRef } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdOutlineMenu,
  MdFormatUnderlined,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import handleChange from "../utils/handleChange";
import { useDispatch } from "react-redux";
type props ={
name?:string,
}
const Description: React.FC<props> = ({name}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col border border-black m-auto w-11/12 h-4/6 rounded-md">
      <div className="h-5/6 border-b-2 border-gray-500">
        <textarea
          name="description"
          id="description"
          className="border w-full h-full resize-none focus:outline-none focus:bg-slate-100 text-xl rounded-md"
          cols={60}
          rows={8}
          ref={textRef}
          onChange={!name ? () => handleChange('bio',textRef,dispatch):() => alert('I skipped that bro, Sorry kbs')}
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
