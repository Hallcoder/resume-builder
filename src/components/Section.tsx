import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md'

interface Props{
title:string,
}
const Section:React.FC<Props> = ({title}) => {
return <div className="flex justify-between h-2/6 border-b-2 items-center">
     <h3 className="font-semibold text-lg m-1">{title}</h3>
     <MdKeyboardArrowDown className='text-3xl  border rounded-md ' />
</div>
}

export default Section;