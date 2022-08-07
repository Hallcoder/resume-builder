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
    skill?:{id:string,title:string,level:string,newValue?:string};
    skills?:skill[] = [{id:'1',title:'Work',level:'Excellent'}];
    id?:string;
}