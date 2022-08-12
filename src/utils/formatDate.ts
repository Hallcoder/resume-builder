export default function formatDate(date:string){
   let dates:string[] = date.split('-')
   switch(dates[1]){
    case '01':
        return `Jan ${dates[0]}`;
    case '02':
        return `Feb ${dates[0]}`;
    case '03':
        return `Mar ${dates[0]}`;
    case '04':
        return `Apr ${dates[0]}`;
    case '05':
        return `May ${dates[0]}`;
    case '06':
        return `Jun ${dates[0]}`;
    case '07':
        return `Jul ${dates[0]}`;
    case '08':
        return `Aug ${dates[0]}`;
    case '09':
        return `Sep ${dates[0]}`;
    case '10':
        return `Oct ${dates[0]}`;
    case '11':
        return `Nov ${dates[0]}`;
    case '12':
        return `Dec ${dates[0]}`;
    default:
        return ``;
   }
}