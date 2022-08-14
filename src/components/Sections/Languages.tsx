import React, { RefObject, useRef, useState } from "react";
import Block from "../Block";
import { MdAdd } from "react-icons/md";
import SkillAndLanguageForm from "./SkillAndLanguageForm";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import State from './../../utils/interfaces';
import handleChange from "../../utils/handleChange";
import Delete from "../../utils/Delete";
const Languages: React.FC = () => {
  let [styles, setStyles] = useState<{display: string}>({ display:'none' });
  const dispatch = useDispatch();
  const dummyRef = useRef();
  const languages:{id:string,name:string,fluency:string}[]= useSelector(state => (state as any).languages!);
  const handleAddNewLanguage = (ref:RefObject<HTMLInputElement>) => {
       setStyles({display:'none'});
       (addRef.current!as HTMLDivElement).style.display = 'block';
       handleChange('new-lang',ref,dispatch);
  }
  const handleEditLanguage = (ref:RefObject<HTMLInputElement>,lang:Object) => {
    setStyles({display:'none'});
    (addRef.current!as HTMLDivElement).style.display = 'block';
    handleChange('edit-language',ref,dispatch,lang);
  }
  const handleDisplayForm = () => {
   (addRef.current!as HTMLDivElement).style.display = 'none';
   styles.display === 'none' ? setStyles({display:'flex'}): setStyles({display:'none'});
   return
  };
  const handleDelete = (status:string,id?:string) => {
    if(status === 'saved'){
      Delete('language',dummyRef,dispatch,id);
    }else{
      setStyles({display:'none'});
     (addRef.current!as HTMLDivElement).style.display = 'flex';
     return;
    }
  }
  const addRef = useRef<HTMLDivElement>(null)
  return (
    <div className="w-full h-full min-h-fit">
     {languages?.map(lang => {
      return <div key={lang.id}>
        <Block title={lang.name} onDelete={handleDelete} level={lang.fluency} value={lang.name} language={lang} onDone={handleEditLanguage}/>
      </div> 
     })}
      <div ref={addRef} className="w-2/12  flex border items-center mt-2 ml-6 h-10 rounded-md hover:bg-slate-100 border-gray-500 justify-around" onClick={handleDisplayForm}>
        <MdAdd onClick={handleDisplayForm} /> Add Skill
      </div>
      <div style={styles}>
         <SkillAndLanguageForm name='language' onDelete={handleDelete} onDone={handleAddNewLanguage} value=''/> 
      </div>
    </div>
  );
};

export default Languages;
