import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Done:React.FC = () => {
    return <div className='w-11/12 flex justify-end items-center'>
    <MdDeleteForever className="text-2xl"/>
    <button className="h-8 bg-blue-700 w-1/12 text-white rounded-md m-1">Done</button>
   </div>
}
export default Done;