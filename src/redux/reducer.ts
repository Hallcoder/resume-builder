import * as actions from '../redux/actionTypes'
import State from '../utils/interfaces'

const reducer:(state:State,action:{type:string,payLoad:State}) => State = (state:State={},action:{type:string,payLoad:State}) => {
    let currentState:State = new State();
    // let {address,names,email,familyName,headLine,phone,linkedIn} = action!.payLoad! as State || undefined;
    switch(action.type){
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
    default:
        return state;
 }
}
export default  reducer;