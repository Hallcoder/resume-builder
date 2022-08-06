import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import SkillAndLanguageForm from "./Sections/SkillAndLanguageForm";
import handleChange from './../utils/handleChange';
interface Props{
title: string,
value?:string,
level?: string,
}
const Block: React.FC<Props> = ({title, level,value}) => {
  const [status, setStatus] = useState("set");
  const handleChangeStatus = (status:string) => {
    setStatus(status)
  }
  if (status === "set") {
    return (
      <div className="flex w-11/12 h-[10vh] m-auto mt-1 items-center border border-gray-400 shadow-md rounded-sm">
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
    <SkillAndLanguageForm name={'Skill'} value={value} onDone={handleChangeStatus}/>
    </div>;
  } else {
    return <div>

    </div>;
  }
};

export default Block;
