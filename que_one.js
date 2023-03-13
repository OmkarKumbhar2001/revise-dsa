let str="India";
let small_case=str.toLowerCase().split('');
const new_Obj=small_case.reduce((grouped_obj,char_a)=>{
    if(grouped_obj[char_a]==undefined){
        grouped_obj[char_a]=1
    }else{
        grouped_obj[char_a]+=1;
    }
    return grouped_obj;
},{})
for(let [key,value] of Object.entries(new_Obj)){
    console.log(key+" ==> "+value)
}