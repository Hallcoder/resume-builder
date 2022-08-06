export default function createAction(type:string,payLoad:Object){
    return {
        type,
        payLoad
    }
}