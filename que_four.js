const addition =(num1,num2)=>{
    return eval(num1+num2)
}
let arr=[-40,-5,1,3,6,7,8,20];
for(let i=0;i<arr.length;i++){
    let current_num=arr[i];
    for(let j=i;j<arr.length;j++){
        if(15==addition(current_num,arr[j])){
            console.log(current_num+" "+arr[j])
        }
    }
}
//but time complexity is high