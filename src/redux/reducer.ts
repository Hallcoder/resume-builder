// @ts-nocheck
import * as actions from "../redux/actionTypes";
import State from "../utils/interfaces";

const reducer: (
  state: State,
  action: { type: string; payLoad: State }
) => State = (
  state: State = new State(),
  action: { type: string; payLoad: State }
) => {
  let currentState: State = new State();
  // let {address,names,email,familyName,headLine,phone,linkedIn} = action!.payLoad! as State || undefined;
  switch (action.type) {
    case actions.SET_NAME:
      currentState.names = action.payLoad.names;
      return currentState;
    case actions.SET_EMAIL:
      currentState.email = action.payLoad.email;
      return currentState;
    case actions.SET_FAMILY_NAME:
      currentState.familyName = action.payLoad.familyName;
      return currentState;
    case actions.SET_HEAD:
      currentState.headLine = action.payLoad.headLine;
      return currentState;
    case actions.SET_PHONE:
      currentState.phone = action.payLoad.phone;
      return currentState;
    case actions.SET_ADDRESS:
      currentState.address = action.payLoad.address;
      return currentState;
    case actions.SET_LINKEDIN:
      currentState.linkedIn = action.payLoad.linkedIn;
      return currentState;
    case actions.SET_BIO:
      currentState.bio = action.payLoad.bio;
      return currentState;
    case actions.ADD_SKILL:
      console.log("adding new skill");
      let skills = currentState.skills;
      skills?.push(action.payLoad.skill!);
      return currentState;
    case actions.EDIT_SKILL:
      let skill = currentState.skills?.find(
        sk => sk.id === action.payLoad.skill!.id
      );
      if (skill) {
        skill!.title = action.payLoad.title;
        return currentState;
      }
      return currentState;
    case actions.ADD_EDU:
      let educations = currentState.educations;
      let validNewEdu = {
        id: action.payLoad.id,
        degree: action.payLoad.edu.Degree,
        school: action.payLoad.edu.School,
        city: action.payLoad.edu.City,
        startdate: action.payLoad.edu["Start Date"].toString(),
        enddate: action.payLoad.edu["End Date"].toString(),
      };
      educations.push(validNewEdu);
      return currentState;
    case actions.EDIT_EDU:
      let edu = currentState.educations.find(
        ed => ed.id === action.payLoad.edu.id
      );
      if (edu) {
        (edu.degree = action.payLoad.edu["Degree"]),
          (edu.city = action.payLoad.edu["City"]),
          (edu.enddate = action.payLoad.edu["End Date"].toString()),
          (edu.startdate = action.payLoad.edu["Start Date"].toString()),
          (edu.school = action.payLoad.edu["School"]);
        return currentState;
      }
      return currentState;
    default:
      return state;
  }
};
export default reducer;
