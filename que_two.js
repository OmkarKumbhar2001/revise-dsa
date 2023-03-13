let str =" I Love India ";
// console.log(str)
function remove_spaces(index_num,str){
    let a=str.replace(" ","")
    a=a.slice(0,-1)+""
    return a
}
let first_str=remove_spaces(1,str)
first_str=remove_spaces(-1,str);

console.log(first_str)
console.log(first_str.length)