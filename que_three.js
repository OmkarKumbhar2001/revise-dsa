const arr1=[7,5,6,1,4,2];
const arr2=[5,3,2,8,1];
function sorted_array(arr){
    let new_sorted_arr=arr.sort((num1,num2)=>{
      return num1-num2;  
    })
    return new_sorted_arr;
}
let arr_sort=sorted_array(arr2);

// for(let i=arr_sort[0];i<=arr_sort[arr_sort.length-1];i++){
//     // console.log(i+" "+ arr_sort[i-1])
//     if(i != arr_sort[i-1]){update -1
//         console.log(i)
//         break;
//     }
// }
// new solution
for(let i=1;i<=arr_sort[arr_sort.length-1];i++){
    if(arr_sort.includes(i)==false){
        console.log(i)
    }
}
