import React from "react";
import { MdOutlineKeyboardBackspace,MdKeyboardArrowDown} from "react-icons/md";
import {BiRedo,BiUndo} from 'react-icons/bi';
import {TbArrowBarUp,TbArrowBarToDown} from 'react-icons/tb'
import { useSelector } from 'react-redux';
import State from "../utils/interfaces";
const ResNavBar: React.FC = () => {
  const state = useSelector(state => state);
  const handleDownload = () => {
    
  }
  return (
    <div className="flex fixed z-[1] w-full top-0 justify-between items-center h-[8vh] bg-black">
      <div className='flex m-2 items-center h-4/6 w-1/12 border rounded-md border-white'> 
        <MdOutlineKeyboardBackspace className='text-white text-3xl'/>
        <span className='text-white  text-center inline-block w-full rounded-md'>Resumes</span>
      </div>
      <div className='w-3/12 flex justify-center items-center h-full'>
        <p className='text-white text-center'>{(state as State).names ? 'Resume '.concat((state as State).names):'Untitled resume'}</p>
      </div>
      <div className='w-4/12 flex justify-around'>
        <div>
           <div className='text-white flex text-4xl'>
            <BiUndo title="Undo" className='border cursor-pointer border-gray-500 rounded-md m-1'/>
            <BiRedo title="Redo" className='border cursor-pointer border-gray-500 rounded-md m-1'/>
           </div>
        </div>
        <div className='border flex items-center text-white rounded-md w-2/12 justify-center'>
        <h2>EN</h2>
        <MdKeyboardArrowDown title="Change Language"/>
        </div>
        <div onClick={handleDownload} title="Download your resume" className='text-white cursor-pointer flex rounded-md w-3/12 bg-blue-800 items-center justify-around'>
            <TbArrowBarToDown className='text-2xl' />
            <h2 className='text-xl'>Download</h2>
        </div>
      </div>
    </div>
  );
};

export default ResNavBar;
