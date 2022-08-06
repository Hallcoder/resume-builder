import { Slider } from "@mui/material";
import React, { useRef } from "react";
import Input from "../common/Input";
import Done from "../Done";
import { useDispatch, useSelector } from "react-redux";
import handleChange from "../../utils/handleChange";
interface Props {
  name: string;
  onDone?: Function;
  value?: string;
}
const SkillAndLanguageForm: React.FC<Props> = ({ name, onDone, value }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col h-3/6 m-auto mt-2 w-11/12 border rounded-md">
      <div className="flex flex-col">
        <h1 className="text-sm text-gray-500">{name}</h1>
        <Input
          refr={ref}
          value={value ? value.toLowerCase() : ""}
          id="skill"
          onChange={() => handleChange("skill", ref, dispatch)}
          className="w-11/12 m-auto border h-3/6 rounded-md mt-2"
        />
      </div>
      <h1 className="text-sm ml-6 text-gray-500">Level</h1>
      <div className="flex m-auto w-11/12">
        <div className="w-10/12 flex items-center">
          <Slider step={20} />
        </div>
        <span className="text-xs m-1">Make a choice</span>
      </div>
      <Done onClick={onDone} />
    </div>
  );
};
export default SkillAndLanguageForm;
