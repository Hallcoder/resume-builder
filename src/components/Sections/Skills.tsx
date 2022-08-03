import React from 'react';
import Block from '../Block';
import {MdAdd} from 'react-icons/md';
const Skills:React.FC = () =>  {
    return <div className="w-full">
 <Block title='React Js(Frontend Development)' subtitle='Excellent'/>
 <Block title='Node Js(Backend Development)' subtitle='Excellent'/>
 <Block title='Grid & Flexbox' subtitle='Excellent'/>
 <div className='w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around'>
    <MdAdd /> Add Skill
 </div>
    </div>
}

export default Skills;