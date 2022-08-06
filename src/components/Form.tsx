import React from "react";
import Input from "./common/Input";
import Select1 from "./select";
import generate from "./../utils/generateYears";
import Description from "./Description";
import Done from "./Done";
interface Props {
  inputs: string[];
  name:string;
}
const Form: React.FC<Props> = ({ inputs }) => {
  const months = generate("months");
  const years = generate("years", 1965, 2008);
  return (
    <div className="w-full h-[40vh] mt-2 border rounded-md border-black p-1 min-h-fit h-fit text-sm">
      <div className="w-full h-[8vh]">
        <Input label={inputs[0]} className="w-full h-10 rounded-md border" />
      </div>
      <div className="w-full h-[8vh] flex">
        <Input label={inputs[1]} className="w-11/12 h-10 rounded-md border" />
        <Input label={inputs[2]} className="w-11/12 h-10 rounded-md border" />
      </div>
      <div className="w-full h-[8vh] justify-around flex">
        <div className='flex m-1 items-center'>
        <h3>Start date</h3>
          <Select1 label="" data={months} name="months"  value={months[0]} />
          <Select1 label="" data={years} name="years" value={years[0]} />
        </div>
        <div className='flex m-1 items-center'>
        <h3>End date</h3>
          <Select1 label="" data={months} name="months" value={months[0]} />
          <Select1 label="" data={years} name="years" value={years[0]} />
        </div>
      </div>
      <div className='h-[30vh]'>
        <h1 className='ml-6'>Description</h1>
        <Description />
        <Done />
      </div>
    </div>
  );
};

export default Form;
