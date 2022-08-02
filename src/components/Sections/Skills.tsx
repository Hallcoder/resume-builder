import React from 'react';
import Skill from '../Skill';
import {MdAdd} from 'react-icons/md';
const Skills:React.FC = () =>  {
    return <div className="w-full">
 <Skill />
 <Skill />
 <Skill />
 <div className='w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around'>
    <MdAdd /> Add Skill
 </div>
    </div>
}

export default Skills;