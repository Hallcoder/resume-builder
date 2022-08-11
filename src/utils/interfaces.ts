type skill = {id:string,title:string,level:string,newValue?:string}; 
type education = {id:string,degree:string,school:string,city:string,startdate:string,enddate:string,description:string}
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
    educations?:education[] = [{id:'1',degree:'Bachelor Degree',school:'University of Rwanda',city:'Huye',startdate:'12/08/2015',enddate:'12/08/2019',description:'Bachelor degree in Information & Technology'}]
}