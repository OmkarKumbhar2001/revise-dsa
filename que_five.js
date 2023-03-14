function splitString(str, N) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if(str.substring(i, i + N).length<N){
        break;
    }
    arr.push(str.substring(i, i + N));
    
  }
  return arr;
}

let flag=true;
let str="abcdefghidfhzd";
let str1="dsadsasdfghisdfsdf";
for(let j=str.length;j>=0;j--){
    let new_arr=splitString(str,j);
    // console.log(new_arr)
    for(let i in new_arr){
        if(str1.includes(new_arr[i])){
        console.log(new_arr[i])
        flag=false
        break;
        }
    }
 
    if(flag==false){
        break;
    }
}
