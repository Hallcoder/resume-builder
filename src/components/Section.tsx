import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {MdKeyboardArrowDown} from 'react-icons/md'
import PersonDetails from './Sections/PersonalDetails';

interface Props{
title:string,
//pay attention here later if you meet errors
RealSection?:string;
}
const Section:React.FC<Props> = ({title,RealSection}) => {
     let [styles,setStyles] = useState({display:'none'});
     const handleDisplay = () => { 
          if(styles.display === 'none'){
               setStyles({display:'flex'});
          }else{
               setStyles({display:'none'})
          }
     }
return <div className="flex w-full flex-col justify-between  min-h-fit  border-b-2 items-center">
     <div className="w-full p-5 h-full flex justify-between items-center">
          <h3 className="font-semibold text-lg m-1">{title}</h3>
          <div className="">
               <HiOutlineDotsVertical className="hidden"/>
               <MdKeyboardArrowDown className='text-3xl  border rounded-md ' onClick={handleDisplay} />
          </div>
     </div>
     <div style={styles} className='w-full h-[70vh]'>
     {RealSection && RealSection === 'PD' && <PersonDetails />}
     </div>
</div>
}

export default Section;