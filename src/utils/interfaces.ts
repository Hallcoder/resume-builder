type skill = {id:string,title:string,level:string,newValue?:string}; 
type education = {id:string,degree:string,school:string,city:string,startdate:string,enddate:string,description?:string}
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
    title?:string;
    edu?:education;
    skill?:skill;
    skills?:skill[]=[];
    educations?:education[] = []
}