import { Slider } from '@mui/material';
import React from 'react';
import Input from '../common/Input';
import {MdDeleteForever} from 'react-icons/md'
import Done from '../Done';
interface Props{
    name:string,
}
const SkillAndLanguageForm:React.FC<Props> = ({name}) => {
    return <div className="flex flex-col h-3/6 m-auto mt-2 w-11/12 border rounded-md">
       <div className="flex flex-col">
             <h1 className="text-sm text-gray-500">{name}</h1>
             <Input id="skill" className="w-11/12 m-auto border h-3/6 rounded-md mt-2"/>
       </div>
        <h1 className="text-sm ml-6 text-gray-500">Level</h1>
       <div className="flex m-auto w-11/12">
        <div className="w-10/12 flex items-center">
            <Slider step={20}  />
        </div><span className="text-xs m-1">Make a choice</span> 
       </div>
       <Done />
    </div>
}
export default SkillAndLanguageForm;