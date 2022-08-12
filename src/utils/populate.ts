const populate = (use:any,state:Object,edu:{id:string,degree:string,school:string,city:string,startdate:string,enddate:string,description:string},set:any) => {
use(() => {
 let st = {...state}
 console.log(st)
 st['Degree'] =edu.degree;
 st['City'] =edu.city;
 st['School'] =edu.school;
 st['Start Date']=edu.startdate;
 st['End Date']=edu.enddate;
 set(st);
},[])
}

export default populate;