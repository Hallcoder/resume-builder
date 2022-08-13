import React, { RefObject, useRef, useState } from "react";
import Block from "../Block";
import { MdAdd } from "react-icons/md";
import SkillAndLanguageForm from "./SkillAndLanguageForm";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import handleChange from "../../utils/handleChange";
const Skills: React.FC = () => {
  let [styles, setStyles] = useState<{display: string}>({ display:'none' });
  const dispatch = useDispatch();
  const dummyRef = useRef();
  const skills:{id:string,title:string,level:string}[]= useSelector(state => (state as any).skills!);
  const [changingValue,setChangingValue] = useState('');
  const handleAddNewSkill = (ref:RefObject<HTMLInputElement>) => {
       setStyles({display:'none'});
       (addRef.current!as HTMLDivElement).style.display = 'block';
       handleChange('new-skill',ref,dispatch);
  }
  const handleEditSkill = (ref:RefObject<HTMLInputElement>,skill:Object) => {
    setStyles({display:'none'});
    (addRef.current!as HTMLDivElement).style.display = 'block';
    handleChange('edit-skill',ref,dispatch,skill);
  }
  const handleDisplayForm = () => {
   (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'});
   return
  };
  const handleDelete = (status:string,id?:string) =>{
    if(status === 'saved'){
      handleChange('delete-skill',dummyRef,dispatch,{id});
    }else{
     setStyles({display:'none'});
     (addRef.current!as HTMLDivElement).style.display = 'flex';
     return;
    }
  }
  const addRef = useRef<HTMLDivElement>(null)
  return (
    <div className="w-full h-full min-h-fit">
     {skills?.map(skill => {
      return <div key={skill.id}>
        <Block title={skill.title} level={skill.level} value={skill.title} skill={skill} onDelete={handleDelete} onDone={handleEditSkill}/>
      </div> 
     })}
      <div ref={addRef} className="w-2/12  flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Skill
      </div>
      <div style={styles}>
         <SkillAndLanguageForm name='Skill' onDelete={handleDelete} onDone={handleAddNewSkill} value={changingValue}/> 
      </div>
    </div>
  );
};

export default Skills;
