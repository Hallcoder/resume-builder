import React, { useRef, useState } from "react";
import Block from "../Block";
import { MdAdd } from "react-icons/md";
import SkillAndLanguageForm from "./SkillAndLanguageForm";
const Skills: React.FC = () => {
  let [styles, setStyles] = useState<{display: string}>({ display:'none' });
  const handleDisplayForm = () => {
   console.log('show form');
    (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'})
   return
  };
  const addRef = useRef<HTMLDivElement>(null)
  return (
    <div className="w-full h-full min-h-fit">
      <Block title="React Js(Frontend Development)" subtitle="Excellent" />
      <Block title="Node Js(Backend Development)" subtitle="Excellent" />
      <Block title="Node Js(Backend Development)" subtitle="Excellent" />
      <Block title="Node Js(Backend Development)" subtitle="Excellent" />
      <Block title="Grid & Flexbox" subtitle="Excellent" />
      <div ref={addRef} className="w-2/12 flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Skill
      </div>
      <div style={styles}>
         <SkillAndLanguageForm name='Skill' /> 
      </div>
    </div>
  );
};

export default Skills;
