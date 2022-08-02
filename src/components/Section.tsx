import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md'

interface Props{
title:string,
//pay attention here later if you meet errors
realSection?:React.FunctionComponentElement<React.FC>;

}
const Section:React.FC<Props> = ({title}) => {
return <div className="flex justify-between h-[13vh]  border-b-2 items-center">
     <h3 className="font-semibold text-lg m-1">{title}</h3>
     <MdKeyboardArrowDown className='text-3xl  border rounded-md ' />
</div>
}

export default Section;