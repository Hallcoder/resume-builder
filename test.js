var lastDigit = function(str1, str2){ 
    let max=0;
    while(parseInt(str2--) && isFinite(max)){
      max = str1 * str1;
      console.log(max)
    }
    return max.toString()[max.toString().length-1]; // fix me
  }
  
  console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))