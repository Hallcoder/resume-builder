import React, { useRef } from 'react';
import Form from '../Form';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import EducationBlock from '../EducationBlock';

const Employment:React.FC = () => {
    let [styles, setStyles] = useState<{display: string}>({ display:'none' });
    const emInputs:string [] = ['Position','Employer','City','Start Date','End Date','Descripion']
    const employments  = useSelector(state => (state as any).employments);
    const handleDisplayForm = () => {
    (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'})
   return
  };
  const handleAddNewEmployment = (ref:any) => {
    (addRef.current!as HTMLDivElement).style.display = 'flex';
    setStyles({display:'none'});
  }
  const addRef = useRef<HTMLDivElement>(null)
return <div className="w-full">
   {employments.map((em:any) => {
    return <EducationBlock key={em.id} title={em.position} emp={em} subtitle={`${em.city}, ${em.employer}`} id={em.id} />
   })}
    <div ref={addRef} className="w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Education
      </div>
      <div style={styles}>
         <Form name='new-emp' inputs={emInputs} onDone={handleAddNewEmployment}/> 
      </div>
</div>
}

export default Employment;