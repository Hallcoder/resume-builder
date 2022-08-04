export default function generate(type:string,start?:number, end?:number) {
  let data = [];
  switch (type) {
    case "years":
      while (start! <= end!) {
        data.push(start!++);
      }
      break;
    case "days":
      while (start! <= end!) {
        data.push(start!++);
      }
      break;
    case "months":
      data = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      break;
    default:
      return [];
  }
  return data;
}
