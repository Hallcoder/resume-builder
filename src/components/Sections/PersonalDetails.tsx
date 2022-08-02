import React from "react";
import Input from "../common/Input";
const PersonDetails = () => {
  return (
    <div className="h-[40vh] w-full">
      <div className="flex h-3/6 w-full ">
        <img src="" alt="" className="h-full m-1 rounded-sm w-3/12 border" />
        <div className="flex flex-col h-full w-full items-center">
          <div className="flex w-full h-3/6">
            <Input
              id="outlined"
              label="Full names"
              className="m-1 h-3/6 border"
            />
            <Input
              id="outlined"
              label="Family name"
              className="h-3/6 border  m-1"
            />
          </div>
          <div className="flex w-full h-2/6">
            <Input label="Email" className="w-full border h-3/6" />
          </div>
        </div>
      </div>
        <div>
            <Input label='Headline' className="w-full h-3/6 border" />
            <Input label='Phone Number' className="w-full h-3/6 border" />
            <Input label='Address' className="w-full h-3/6 border" />
            <Input label='LinkedIn' className="w-full h-3/6 border" />
        </div>
    </div>
  );
};

export default PersonDetails;
