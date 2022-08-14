import React, { MouseEventHandler, RefObject } from "react";
import { MdDeleteForever } from "react-icons/md";
import State from "./../utils/interfaces";
interface Props {
  onDone: Function;
  skill?: { id: string; title: string; level: string };
  language?: { id: string; name: string; fluency: string };
  refr?: RefObject<HTMLInputElement>;
  formRef?: RefObject<HTMLInputElement>;
  inForm?: boolean;
  emp?: {
    id: string;
    position: string;
    employer: string;
    city: string;
    startdate: string;
    enddate: string;
    description: string;
  };
  edu?: {
    id: string;
    degree: string;
    school: string;
    city: string;
    startdate: string;
    enddate: string;
    description: string;
  };
  onDelete: (id?: string, status?: string) => void;
}
const Done: React.FC<Props> = ({
  onDone,
  refr,
  edu,
  skill,
  onDelete,
  inForm,
  emp,
  language,
}) => {
  const chooseAction:() => MouseEventHandler = () => {
    if (!inForm) {
      if(skill){
         return  () => onDelete("saved", skill.id);
      }else if(language){
        return () => onDelete("saved", language.id);
      }
      return () => onDelete("pending");
    }  else if (inForm) {
      if(edu){
        return  () => onDelete("saved", edu.id);
     }else if(emp){
       return () => onDelete("saved", emp.id);
     }
     return () => onDelete("pending");
    }
  };
  return (
    <div className="w-11/12 flex justify-end items-center">
      <MdDeleteForever
        className="text-2xl hover:cursor-pointer"
        onClick={chooseAction()}
      />
      <button
        className="h-8 bg-blue-700 w-1/12 text-white rounded-md m-1"
        onClick={
          skill ? () => onDone(refr, skill) : () => onDone(refr, language)
        }
      >
        Done
      </button>
    </div>
  );
};
export default Done;
