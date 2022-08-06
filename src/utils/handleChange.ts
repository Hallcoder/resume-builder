import {Dispatch, RefObject } from "react";
import * as actions from '../redux/actionTypes'
import createAction from "../redux/actionCreators";
 const handleChange :(act: string,ref:RefObject<any>,dispatch:Dispatch<any>)=> void = (act,ref:RefObject<any>,dispatch) => {
    switch (act) {
   case "names":
    dispatch(createAction(actions.SET_NAME,{names:ref.current.value}))
    break;
   case "familyName":
    dispatch(createAction(actions.SET_FAMILY_NAME,{familyName:ref.current.value}))
    break;
   case "address": 
   dispatch(createAction(actions.SET_ADDRESS,{address:ref.current.value}))
   break;
   case "headLine":
    dispatch(createAction(actions.SET_HEAD,{headLine:ref.current.value}))
    break;
   case "email":
    dispatch(createAction(actions.SET_EMAIL,{email:ref.current.value}))
    break;
   case "phone":
    dispatch(createAction(actions.SET_PHONE,{phone:ref.current.value}))
    break;
   default:
     break;
  }
  };
export default handleChange;