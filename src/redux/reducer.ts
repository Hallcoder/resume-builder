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

const reducer:(state:State,action:{type:string,payLoad:Object}) => Object = (state:State={},action:{type:string,payLoad:Object}) => {
     let currentState:State = {...state};
    switch(action.type){
    case actions.SET_ADDRESS:
          currentState.address = (action.payLoad as State).address;
    return currentState;
    default:
        return state;
 }
}
export default  reducer;