import React, { RefObject } from 'react';
import { MdDeleteForever } from 'react-icons/md';
interface Props{
    onDone:Function;
    skill?:{id:string,title:string,level:string}; 
    language?:Object;
    refr?:RefObject<HTMLInputElement>;
    formRef?:RefObject<HTMLInputElement>;
    onDelete:(id?:string,status?:string) => void;
}
const Done:React.FC<Props> = ({onDone,refr,skill,onDelete,language}) => {
    return <div className='w-11/12 flex justify-end items-center'>
    <MdDeleteForever className="text-2xl hover:cursor-pointer" onClick={skill? () => onDelete('saved',skill.id):() => onDelete('pending')}/>
    <button className="h-8 bg-blue-700 w-1/12 text-white rounded-md m-1" onClick={skill? () => onDone(refr,skill):() => onDone(refr,language)}>Done</button>
   </div>
}
export default Done;