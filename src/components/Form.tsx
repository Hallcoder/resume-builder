import React, { RefObject, useRef, useState } from "react";
import Input from "./common/Input";
import Select1 from "./select";
import Joi from 'joi'
import generate from "./../utils/generateYears";
import Description from "./Description";
import Done from "./Done";
import handleChange from "../utils/handleChange";
import { useDispatch } from "react-redux";
interface Props {
  inputs: string[];
  name:string;
}
const Form: React.FC<Props> = ({ inputs }) => {
  const [state,setState] = useState({
    [inputs[0]]:'',
    [inputs[1]]:'',
    [inputs[2]]:'',
    [inputs[3]]:'',
    [inputs[4]]:'',
  })
  const schema = Joi.object({
    [inputs[0]]:Joi.string().required(),
    [inputs[1]]:Joi.string().required(),
    [inputs[2]]:Joi.string().required(),
    [inputs[3]]:Joi.string().required(),
    [inputs[4]]:Joi.string().required(),
  })
  const handleLocalChange = (ref:RefObject<any>) => {   
    let st = {...state}
    st[ref.current.name] = ref.current.value;
    setState(st);
  }
  const handleSubmit = () => {
  handleChange('new-education',useRef(),useDispatch(),state);
  alert('Loading')
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
          <input type="date" name={inputs[3]} className='border p-4' />
        </div>
        <div className='flex m-1 items-center'>
        <h3 className='m-1'>{inputs[4]}</h3>
         <input  type='date' name={inputs[4]} className='border p-4'></input>
        </div>
      </div>
      <div className='h-[35vh]'>
        <h1 className='ml-6'>Description</h1>
        <Description name="ed"/>
        <Done onDone={handleSubmit}/>
      </div>
    </div>
  );
};

export default Form;
