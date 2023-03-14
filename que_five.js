function splitString(str, N,last_char="i") {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(i, i + N));
    if(str.substring(i, i + N).slice(-1)==last_char){
        break;
    }
    
  }
  return arr;
}


let str="abcdefghi";
let str1="fghi";

let new_arr=splitString(str,str1.length,str.slice(-1));
for(let i in new_arr){
   if(new_arr[i]==str1){
      console.log(new_arr[i])
      break;
    }
 }

