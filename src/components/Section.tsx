import React, { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {MdKeyboardArrowDown} from 'react-icons/md'
import PersonDetails from './Sections/PersonalDetails';
import Bio from './Sections/Bio';
import Skills from './Sections/Skills';

interface Props{
title:string,
//pay attention here later if you meet errors
RealSection?:string;
}
const Section:React.FC<Props> = ({title,RealSection}) => {
     let [styles,setStyles] = useState({display:'none'});
     let [classAccording,setClassAccording] = useState('w-full h-[70vh]');
     const handleDisplay = () => { 
          if(styles.display === 'none'){
               setStyles({display:'flex'});
          }else{
               setStyles({display:'none'})
          }
     }
   useEffect(()=>{
     switch(RealSection){
          case 'BIO':
               setClassAccording('w-full h-[40vh]')
          break;
          case 'PD':
               setClassAccording('w-full h-[70vh]')
          break;
          default:
               setClassAccording('w-full h-[40vh]')
     }
   },[])
return <div className="flex w-full flex-col justify-between  min-h-fit  border-b-2 items-center">
     <div className="w-full p-5 h-full flex justify-between items-center">
          <h3 className="font-semibold text-lg m-1">{title}</h3>
          <div className="flex items-center">
               <HiOutlineDotsVertical className="text-3xl m-2 p-1 border rounded-md hover:border-blue-300"/>
               <MdKeyboardArrowDown className='text-3xl  border rounded-md ' onClick={handleDisplay} />
          </div>
     </div>
     <div style={styles} className={classAccording}>
     {RealSection && RealSection === 'PD' && <PersonDetails />}
     {RealSection && RealSection === 'BIO' && <Bio />}
     {RealSection && RealSection === 'SKILL' && <Skills />}
     </div>
</div>
}

export default Section;