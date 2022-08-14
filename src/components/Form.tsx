 // @ts-nocheck
import React, { RefObject, useEffect, useRef, useState } from "react";
import Input from "./common/Input";
import Select1 from "./select";
import Joi from 'joi'
import generate from "./../utils/generateYears";
import Description from "./Description";
import Done from "./Done";
import handleChange from "../utils/handleChange";
import { useDispatch } from "react-redux";
import { Dispatch } from 'react';
import populate from "../utils/populate";
import { GiConsoleController } from "react-icons/gi";
interface Props {
  inputs: string[];
  name:string;
  onDone?:Function;
  id?:string,
  onDelete:Function,
  emp?:Object,
  edu?:{id:string,degree:string,school:string,city:string,startdate:string,enddate:string,description:string};
}
const Form: React.FC<Props> = ({name,onDelete, inputs,onDone,edu,id,emp}) => {
  const [state,setState] = useState({
    [inputs[0]]:'',
    [inputs[1]]:'',
    [inputs[2]]:'',
    [inputs[3]]:'',
    [inputs[4]]:'',
  })
  const dummyref = useRef();
  const takeAction =(name:String) =>{
     switch(name){
      case 'new-edu':
        return handleSubmitNewEdu;
      case 'edit-edu':
        return handleEditNewEdu;
      case 'new-emp':
        return handleSubmitNewEmp;
      case 'edit-emp':
        return handleEditNewEmp;
      default:
        return null;
     }
  }
  const Dispatch = useDispatch();
  if(edu){
    populate(useEffect,state,edu,setState);
  }
  if(emp){
    populate(useEffect,state,emp,setState);
  }
  const handleLocalChange = (ref:RefObject<any>) => {   
    let st = {...state}
    st[ref.current.name] = ref.current.value;
    setState(st);
  }
  const handleSubmitNewEmp = () =>{
  handleChange('new-employment',dummyref,Dispatch,state);
  onDone();
  }
  const handleEditNewEmp = () => {
    handleChange('edit-employment',dummyref,Dispatch,{id:id,...state});
    onDone();
  }
  const handleSubmitNewEdu = () => {
    handleChange('new-education',dummyref,Dispatch,state);
    onDone();
  }
  const handleEditNewEdu = () => {
    handleChange('edit-education',dummyref,Dispatch,{id:id,...state});
    onDone();
  }
  return (
    <div className="w-full mt-2 border rounded-md border-black p-1 min-h-fit h-fit text-sm">
      <div className="w-full h-[8vh]">
        <Input  name={inputs[0]} value={state[inputs[0]]} label={inputs[0]} className="w-full h-10 rounded-md border" onChange={handleLocalChange}/>
      </div>
      <div className="w-full h-[8vh] flex">
        <Input  name={inputs[1]} value={state[inputs[1]]} label={inputs[1]} className="w-11/12 h-10 rounded-md border" onChange={handleLocalChange}/>
        <Input  name={inputs[2]} value={state[inputs[2]]} label={inputs[2]} className="w-11/12 h-10 rounded-md border" onChange={handleLocalChange}/>
      </div>
      <div className="w-full h-[8vh] justify-around flex">
        <div className='flex m-1 min-w-fit items-center'>
          <h3 className='m-1'>{inputs[3]}</h3>
          <Input type="date" name={inputs[3]} value={state[inputs[3]]} onChange={handleLocalChange} className='border p-4 mt-2' />
        </div> 
        <div className='flex m-1 items-center'>
        <h3 className='m-1'>{inputs[4]}</h3>
         <Input  type='date' name={inputs[4]} value={state[inputs[4]]} onChange={handleLocalChange} className='border p-4 mt-2'/>
        </div>
      </div>
      <div className='h-[35vh]'>
        <h1 className='ml-6'>Description</h1>
        <Description name="ed"/>
        <Done inForm={true} edu={edu} emp={emp} onDone={takeAction(name)} onDelete={onDelete}/>
      </div>
    </div>
  );
};

export default Form;
