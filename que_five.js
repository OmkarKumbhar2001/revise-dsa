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

let flag=true;
let str="abcdefghi";
let str1="cdefgh";
for(let j=str.length;j>=0;j--){
    let new_arr=splitString("abcdefghi",j,"i");
    for(let i in new_arr){
        if(new_arr[i]==str1){
        console.log(new_arr[i])
        flag=false
        break;
        }
    }
//     console.log(j)
    if(flag==false){
        break;
    }
}
    
