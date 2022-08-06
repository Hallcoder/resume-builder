import React, { useRef } from 'react';
import Block from '../Block';
import Form from '../Form';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';

const Education:React.FC = () => {
    let [styles, setStyles] = useState<{display: string}>({ display:'none' });
  const handleDisplayForm = () => {
    (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'})
   return
  };
  const addRef = useRef<HTMLDivElement>(null)
return <div className="w-full">
    <Block title='High School Diploma' subtitle='Rwanda Coding Academy'/>
    <Block title='High School Diploma' subtitle='Rwanda Coding Academy'/>
    <Block title='High School Diploma' subtitle='Rwanda Coding Academy'/>
    <div ref={addRef} className="w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Education
      </div>
      <div style={styles}>
         <Form name='Education' inputs={['Education','School','City']}/> 
      </div>
</div>
}

export default Education;