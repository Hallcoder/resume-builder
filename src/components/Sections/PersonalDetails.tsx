import * as actions from "../../redux/actionTypes";
import { useDispatch } from "react-redux";
import Input from "../common/Input";
import createAction from "../../redux/actionCreators";
import { useRef } from "react";
import { useSelector } from "react-redux";
import State from "./../../utils/interfaces";
const PersonDetails = () => {
  const state: State = useSelector(state => state);
  const dispatch = useDispatch();
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
    <div className="h-[40vh] w-full">
      <div className="flex h-3/6 w-full ">
        <img src="" alt="" className="h-full m-1 rounded-sm w-3/12 border" />
        <div className="flex flex-col h-full w-full items-center">
          <div className="flex w-full h-3/6">
            <Input
              value={state.names}
              id="outlined"
              label="Full names"
              className="m-1 h-3/6 border"
              refr={nameRef}
              onChange={() => handleChange("names")}
            />
            <Input
              value={state.familyName}
              id="outlined"
              label="Family name"
              refr={fnameRef}
              className="h-3/6 border  m-1"
              onChange={() => handleChange("familyName")}
            />
          </div>
          <div className="flex w-full h-2/6">
            <Input
              value={state.email}
              label="Email"
              refr={emailRef}
              onChange={() => handleChange("email")}
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
          onChange={() => handleChange("email")}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.phone}
          label="Phone Number"
          refr={phoneRef}
          onChange={() => handleChange("phone")}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.address}
          label="Address"
          refr={addressRef}
          onChange={() => handleChange("address")}
          className="w-full h-3/6 border"
        />
        <Input
          value={state.linkedIn}
          label="LinkedIn"
          refr={lRef}
          onChange={() => handleChange("linkedIn")}
          className="w-full h-3/6 border"
        />
      </div>
    </div>
  );
};

export default PersonDetails;
