import * as actions from '../redux/actionTypes'

interface State{
    names?:string,
    familyName?:string,
    address?:string,
    email?:string,
    headLine?:string,
    phone?:string,
    linkedIn?:string,
}

const reducer:(state:State,action:{type:string,payLoad:Object}) => State = (state:State={},action:{type:string,payLoad:Object}) => {
    let currentState:State = {...state};
    let {address,names,email,familyName,headLine,phone,linkedIn} = <State>action.payLoad 
    switch(action.type){
    case actions.SET_NAME:
        currentState.names = names;
    return currentState;
    case actions.SET_EMAIL:
        currentState.email = email;
    return currentState;
    case actions.SET_FAMILY_NAME:
        currentState.familyName = familyName;
    return currentState;
    case actions.SET_HEAD:
        currentState.headLine = headLine;
    return currentState;
    case actions.SET_PHONE:
        currentState.phone = phone;
    return currentState;
    case actions.SET_ADDRESS:
        currentState.address = address;
    return currentState;
    case actions.SET_LINKEDIN:
        currentState.linkedIn = linkedIn;
        return currentState
    default:
        return state;
 }
}
export default  reducer;