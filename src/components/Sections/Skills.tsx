import React, { RefObject, useRef, useState } from "react";
import Block from "../Block";
import { MdAdd } from "react-icons/md";
import SkillAndLanguageForm from "./SkillAndLanguageForm";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import State from './../../utils/interfaces';
import handleChange from "../../utils/handleChange";
const Skills: React.FC = () => {
  let [styles, setStyles] = useState<{display: string}>({ display:'none' });
  const dispatch = useDispatch();
  const skills:{id:string,title:string,level:string}[]= useSelector(state => (state! as State).skills!);
  const handleAddNewSkill = (ref:RefObject<HTMLInputElement>,) => {
  
  }
  const handleDisplayForm = () => {
    (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'})
   return
  };
  const addRef = useRef<HTMLDivElement>(null)
  return (
    <div className="w-full h-full min-h-fit">
     {skills?.map(skill => {
      return <Block title={skill.title} level={skill.level} value={skill.title} skill={skill}/>
     })}
      <div ref={addRef} className="w-2/12  flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Skill
      </div>
      <div style={styles}>
         <SkillAndLanguageForm name='Skill' identifier="new" onDone={() => handleAddNewSkill()}/> 
      </div>
    </div>
  );
};

export default Skills;
