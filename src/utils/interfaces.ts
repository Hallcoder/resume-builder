type skill = {id:string,title:string,level:string,newValue?:string}; 
export default class State{
    names?:string='s';
    familyName?:string;
    address?:string ;
    email?:string;
    headLine?:string;
    phone?:string;
    linkedIn?:string;
    bio?:string;
    id?:string;
    skill?:skill;
    skills?:skill[]=[];
}