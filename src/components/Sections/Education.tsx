import React, { useRef } from 'react';
import Block from '../Block';
import Form from '../Form';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import EducationBlock from '../EducationBlock';
import handleChange from './../../utils/handleChange';
import { useDispatch } from 'react-redux';
import Delete from '../../utils/Delete';

const Education:React.FC = () => {
    let [styles, setStyles] = useState<{display: string}>({ display:'none' });
    const edInputs:string [] = ['Degree','School','City','Start Date','End Date','Descripion']
    const educations  = useSelector(state => (state as any).educations);
  const handleDisplayForm = () => {
    (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'})
   return
  };
  const dummyRef = useRef();
  const Dispatch = useDispatch();
  const handleAddNewEducation = (ref:any) => {
    (addRef.current!as HTMLDivElement).style.display = 'flex';
    setStyles({display:'none'});
  }
  const handleDelete = (status:string,id?:string) =>{
    if(status === 'saved'){
      Delete('education',dummyRef,Dispatch,id);
    }else{
     setStyles({display:'none'});
     (addRef.current!as HTMLDivElement).style.display = 'flex';
     return;
    }
  }
  const addRef = useRef<HTMLDivElement>(null)
return <div className="w-full">
   {educations.map((ed:any) => {
    return <EducationBlock key={ed.id} title={ed.degree} edu={ed} onDelete={handleDelete} subtitle={ed.school} id={ed.id} />
   })}
    <div ref={addRef} className="w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Education
      </div>
      <div style={styles}>
         <Form name='new-edu' inputs={edInputs} onDelete={handleDelete} onDone={handleAddNewEducation}/> 
      </div>
</div>
}

export default Education;