import React, { EventHandler, RefObject } from 'react';
import { MdDeleteForever } from 'react-icons/md';
interface Props{
    onDone:any;
    skill?:Object;
    refr?:RefObject<HTMLInputElement>;
    formRef?:RefObject<HTMLInputElement>;
}
const Done:React.FC<Props> = ({onDone,refr,skill}) => {
    return <div className='w-11/12 flex justify-end items-center'>
    <MdDeleteForever className="text-2xl"/>
    <button className="h-8 bg-blue-700 w-1/12 text-white rounded-md m-1" onClick={!skill? () => onDone(refr,skill):onDone}>Done</button>
   </div>
}
export default Done;