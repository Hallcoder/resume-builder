 // @ts-nocheck
import { useDispatch } from "react-redux";
import Input from "../common/Input";
import handleChange from "../../utils/handleChange";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import State from "./../../utils/interfaces";
const PersonDetails = () => {
  const state: State | any = useSelector(state => state);
  const [image,setimage] = useState();
  const ref =  useRef();
  const dispatch = useDispatch();
  const handleImageChange = (e:Event) => {
    let file = e.target.files[0];
    const reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setimage(reader.result);   
  }
}
useEffect(() => {
  handleChange('image',ref,dispatch,{image:image});
},[image])
  const { nameRef, fnameRef, emailRef, phoneRef, addressRef, hRef, lRef } = {
    nameRef: useRef<HTMLInputElement>(null),
    fnameRef: useRef<HTMLInputElement>(null),
    emailRef: useRef<HTMLInputElement>(null),
    phoneRef: useRef<HTMLInputElement>(null),
    addressRef: useRef<HTMLInputElement>(null),
    hRef: useRef<HTMLInputElement>(null),
    lRef: useRef<HTMLInputElement>(null),
  };
  return (
    <div className=" h-fit w-full">
      <div className="flex h-3/6 w-full">
        <div className="w-3/12 border h-1/6">
          <h1 className="text-xs">Photo</h1>
          <label htmlFor="image" className="h-2/6 w-full hover:cursor-pointer"><img src={image} alt="prof " className="object-cover h-4/6 w-full" /></label>
          <input type="file" id="image" className="hidden" onChange={handleImageChange}/>
        </div>
        <div className="flex flex-col h-full w-full items-center">
          <div className="flex w-full h-3/6">
            <Input
              value={state.names}
              id="outlined"
              label="Full names"
              className="m-1 h-3/6 border"
              refr={nameRef}
              onChange={() => handleChange("names",nameRef,dispatch)}
            />
            <Input
              value={state.familyName}
              id="outlined"
              label="Family name"
              refr={fnameRef}
              className="h-3/6 border  m-1"
              onChange={() => handleChange("familyName",fnameRef,dispatch)}
            />
          </div>
          <div className="flex w-full h-2/6">
            <Input
              value={state.email}
              label="Email"
              refr={emailRef}
              onChange={() => handleChange("email",emailRef,dispatch)}
              className="w-full border h-3/6"
            />
          </div>
        </div>
      </div>
      <div>
        <Input
          value={state.headLine}
          label="Headline"
          refr={hRef}
          onChange={() => handleChange("headLine",hRef,dispatch)}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.phone}
          label="Phone Number"
          refr={phoneRef}
          onChange={() => handleChange("phone",phoneRef,dispatch)}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.address}
          label="Address"
          refr={addressRef}
          onChange={() => handleChange("address",addressRef,dispatch)}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.linkedIn}
          label="LinkedIn"
          refr={lRef}
          onChange={() => handleChange("linkedIn",lRef,dispatch)}
          className="w-full h-3/6 border"
        />
      </div>
    </div>
  );
};

export default PersonDetails;
