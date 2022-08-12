type skill = {id:string,title:string,level:string}; 
type langs = {id:string,name:string,fluency:string}
type education = {id:string,degree:string,school:string,city:string,startdate:string,enddate:string,description?:string}
export default class State{
    names?:string='your_name';
    familyName?:string;
    address?:string='your_address';
    email?:string='email@address.com';
    headLine?:string='role';
    phone?:string;
    linkedIn?:string;
    bio?:string;
    id?:string;
    title?:string;
    edu?:education;
    skill?:skill;
    image?:any;
    languages?:langs[] = [];
    skills?:skill[]=[];
    educations?:education[] = []
}