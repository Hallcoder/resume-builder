// @ts-nocheck
import * as actions from "../redux/actionTypes";
import State from "../utils/interfaces";

const reducer: (
  state: State,
  action: { type: string; payLoad: State }
) => State = (state: State = new State(), action) => {
  let currentState: State = { ...state };
  let index:number;
  switch (action.type) {
    case actions.SET_IMAGE:
      currentState.image = action.payLoad.image.image;
      return currentState;
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
      currentState.skills = [...currentState.skills, action.payLoad.skill];
      return currentState;
    case actions.EDIT_SKILL:
      let skill = currentState.skills?.find(
        sk => sk.id === action.payLoad.skill!.id
      );
      index =  currentState.skills.indexOf(skill);
      if (skill) {
        skill!.title = action.payLoad.title;
        skill!.level = action.payLoad.skill.level;
        skill!.step = action.payLoad.skill.step;
        currentState.skills = [
          ...currentState.skills.slice(0, index),
          skill,
          ...currentState.skills.slice(index + 1),
        ];
        return currentState;
      }
      return currentState;
    case actions.ADD_EDU:
      let validNewEdu = {
        id: action.payLoad.id,
        degree: action.payLoad.edu.Degree,
        school: action.payLoad.edu.School,
        city: action.payLoad.edu.City,
        startdate: action.payLoad.edu["Start Date"].toString(),
        enddate: action.payLoad.edu["End Date"].toString(),
      };
      currentState.educations = [...currentState.educations, validNewEdu];
      return currentState;
    case actions.EDIT_EDU:
      let edu = currentState.educations?.find(
        ed => ed.id === action.payLoad.edu.id
      );
       index = currentState.educations.indexOf(edu);
      if (edu) {
        (edu.degree = action.payLoad.edu["Degree"]),
          (edu.city = action.payLoad.edu["City"]),
          (edu.enddate = action.payLoad.edu["End Date"].toString()),
          (edu.startdate = action.payLoad.edu["Start Date"].toString()),
          (edu.school = action.payLoad.edu["School"]);
        currentState.educations = [
          ...currentState.educations.slice(0, index),
          edu,
          ...currentState.educations.slice(index + 1),
        ];
        return currentState;
      }
      return currentState;
    case actions.ADD_LANG:
      console.log(action.payLoad.lang);
      currentState.languages = [...currentState.languages, action.payLoad.lang];
      return currentState;
    case actions.EDIT_LANG:
      let lang = currentState.languages?.find(
        lan => lan.id === action.payLoad.lang!.id
      );
      index = currentState.languages.indexOf(lang);
      if (lang) {
        lang!.name = action.payLoad.name;
        lang.fluency = action.payLoad.lang.fluency;
        lang.step = action.payLoad.lang.step;
        currentState.languages = [
          ...currentState.languages.slice(0, index),
          lang,
          ...currentState.languages.slice(index + 1),
        ];
        return currentState;
      }
      return currentState;
    case actions.ADD_EMP:
      let validNewEmp = {
        id: action.payLoad.id,
        position: action.payLoad.emp.Position,
        employer: action.payLoad.emp.Employer,
        city: action.payLoad.emp.City,
        startdate: action.payLoad.emp["Start Date"].toString(),
        enddate: action.payLoad.emp["End Date"].toString(),
      };
      currentState.employments = [...currentState.employments, validNewEmp];
      return currentState;
    case actions.EDIT_EMP:
      let emp = currentState.employments?.find(
        em => em.id === action.payLoad.emp.id
      );
     index = currentState.employments.indexOf(emp);
      if (emp) {
        (emp.position = action.payLoad.emp["Position"]),
          (emp.city = action.payLoad.emp["City"]),
          (emp.enddate = action.payLoad.emp["End Date"].toString()),
          (emp.startdate = action.payLoad.emp["Start Date"].toString()),
          (emp.employer = action.payLoad.emp["Employer"]);
        currentState.employments = [
          ...currentState.employments.slice(0, index),
          emp,
          ...currentState.employments.slice(index + 1),
        ];
        return currentState;
      }
      return currentState;
    case actions.REMOVE_SKILL:
      console.log('deleting skill');
       index = currentState.skills.indexOf(currentState.skills.find(sk => sk.id === action.payLoad.id));
      console.log('Got it',index);
     currentState.skills = [...currentState.skills.slice(0,index),...currentState.skills.slice(index + 1)];
     return currentState;
    case actions.REMOVE_EDU:
      console.log('deleting edu');
     index = currentState.educations.indexOf(currentState.educations.find(ed => ed.id === action.payLoad.id));
      console.log('Got it',index);
     currentState.educations = [...currentState.educations.slice(0,index),...currentState.educations.slice(index + 1)];
     return currentState;
     case actions.REMOVE_LANG:
      console.log('deleting education  in reducer');
      index = currentState.languages.indexOf(currentState.languages.find(lang => lang.id === action.payLoad.id));
     console.log('Got it',index);
    currentState.languages = [...currentState.languages.slice(0,index),...currentState.languages.slice(index + 1)];
    return currentState;
    case actions.REMOVE_EMP:
      console.log('deleting employment');
      index = currentState.employments.indexOf(currentState.employments.find(emp => emp.id === action.payLoad.id));
     console.log('Got it',index);
    currentState.employments = [...currentState.employments.slice(0,index),...currentState.employments.slice(index + 1)];
    return currentState;
    default:
      return state;
  }
};
export default reducer;
