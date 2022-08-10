type skill = {id:string,title:string,level:string,newValue?:string}; 
type education = {title:string,school:string,city:string,startDate:string,endDate:string,description:string}
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
    skills?:skill[]=[{id:'1',title:'React JS',level:'Experienced'}];
    educations?:education[] = [{title:'Bachelor Degree',school:'University of Rwanda',city:'Huye',startDate:'12/08/2015',endDate:'12/08/2019',description:'Bachelor degree in Information & Technology'}]
}