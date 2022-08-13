 // @ts-nocheck
import React, { RefObject, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import SkillAndLanguageForm from "./Sections/SkillAndLanguageForm";
import State from './../utils/interfaces';
import { useDispatch } from 'react-redux';
interface Props{
title: string,
value?:string,
level?: string,
skill?:State,
onDone?:Function,
subtitle?:string,
language?:State,
onDelete:Function,
}
const Block: React.FC<Props> = ({title, level,onDelete,language,skill,onDone}) => {
  const [status, setStatus] = useState("set");
  const dispatch = useDispatch();
  const handleChangeStatus = (status:string) => {
    setStatus(status)
  }
  const editSkill = (ref:RefObject<HTMLInputElement>,skill:Object) => {
    onDone!(ref,skill)
    setStatus('set');
  }
  const editLanguage= (ref:RefObject<HTMLInputElement>,language:Object) => {
  onDone!(ref,language);
  setStatus('set');
  }
  if (status === "set") {
    return (
      <div className="flex w-11/12  h-[10vh] ml-auto mr-auto m-1 mt-1 items-center border border-gray-400 shadow-md rounded-sm">
        <div className="w-6/12 m-1">
          <h1>{title}</h1>
          <h5 className="text-sm mt-2 text-gray-500">{level}</h5>
        </div>
        <div className="rounded-sm w-6/12 flex justify-end">
          <MdModeEdit className="border text-3xl rounded-md p-1 m-1" onClick={() => handleChangeStatus('edit')}/>
        </div>
      </div>
    );
  } else if (status === "edit") {
    return <div>
    <SkillAndLanguageForm name={!language ?'Skill':'Language'} onDelete={onDelete} value='' language={language} onDone={language ? editLanguage:editSkill} skill={skill}/>
    </div>;
  } else {
    return <div>

    </div>;
  }
};

export default Block;
