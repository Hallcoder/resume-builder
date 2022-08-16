import { Dispatch, RefObject } from "react";
import * as actions from "../redux/actionTypes";
import createAction from "../redux/actionCreators";
import State from "./interfaces";
const handleChange: (
  act: string,
  ref: RefObject<any>,
  dispatch: Dispatch<any>,
  payLoad?: State
) => void = (act, ref: RefObject<any>, dispatch, payLoad) => {
  switch (act) {
    case "image":
      dispatch(createAction(actions.SET_IMAGE, { image: payLoad }));
      break;
    case "names":
      dispatch(createAction(actions.SET_NAME, { names: ref.current.value }));
      break;
    case "familyName":
      dispatch(
        createAction(actions.SET_FAMILY_NAME, { familyName: ref.current.value })
      );
      break;
    case "address":
      dispatch(
        createAction(actions.SET_ADDRESS, { address: ref.current.value })
      );
      break;
    case "headLine":
      dispatch(createAction(actions.SET_HEAD, { headLine: ref.current.value }));
      break;
    case "email":
      dispatch(createAction(actions.SET_EMAIL, { email: ref.current.value }));
      break;
    case "phone":
      dispatch(createAction(actions.SET_PHONE, { phone: ref.current.value }));
      break;
    case "bio":
      dispatch(createAction(actions.SET_BIO, { bio: ref.current.value }));
      break;
    case "linkedIn":
      dispatch(
        createAction(actions.SET_LINKEDIN, { linkedIn: ref.current.value })
      );
      break;
    case "new-skill":
      try {
        dispatch(
          createAction(actions.ADD_SKILL, {
            skill: {
              id: Math.random().toString(),
              title: ref.current.value,
              level:payLoad.level,
              step:payLoad.step
            },
          })
        );
      } catch (error) {
        alert(error);
      }
      break;
    case "edit-skill":
      dispatch(
        createAction(actions.EDIT_SKILL, {
          skill: payLoad,
          title: ref.current.value,
        })
      );
      break;
    case "new-education":
      dispatch(
        createAction(actions.ADD_EDU, {
          id: Math.random().toString(),
          edu: payLoad,
        })
      );
      break;
    case "edit-education":
      dispatch(createAction(actions.EDIT_EDU, { edu: payLoad }));
      break;
    case "new-lang":
      dispatch(
        createAction(actions.ADD_LANG, {
          lang: {
            id: Math.random().toString(),
            name: ref.current.value,
          },
        })
      );
      break;
    case "edit-language":
      dispatch(
        createAction(actions.EDIT_LANG, {
          lang: payLoad,
          name: ref.current.value,
        })
      );
      break;
    case "new-employment":
      dispatch(
        createAction(actions.ADD_EMP, {
          id: Math.random().toString(),
          emp: payLoad,
        })
      );
      break;
    case "edit-employment":
      dispatch(createAction(actions.EDIT_EMP, { emp: payLoad }));
      break;
    case "delete-skill":
      dispatch(createAction(actions.REMOVE_SKILL, { id: payLoad.id }));
      break;
    case "delete-education":
      dispatch(createAction(actions.REMOVE_EDU, { id: payLoad.id }));
      break;
    case "delete-language":
      dispatch(createAction(actions.REMOVE_LANG, { id: payLoad.id }));
      break;
    case "delete-employment":
      dispatch(createAction(actions.REMOVE_EMP,{id:payLoad.id}))
      break;
    default:
      break;
  }
};
export default handleChange;
