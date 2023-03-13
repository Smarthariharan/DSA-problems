const name = "level";
let name_split = name.split("");
// console.log(name_split);
name_split.reverse();

// console.log(name_split.reverse());

name_split.join("");
let final = name_split.join("");
// console.log(final);

if(name === final){
    console.log(name + " is a palindrome");
}
else{
    console.log(name + " is not a palindrome");
}


// In loop for palindrome
const name_arr = "racecar";
let rev_str = ""
const array = [];

for(let i = name_arr.length - 1  ; i >= 0; i--){
array.push(name_arr[i])
// console.log(array);
}
for (let i = 0; i < array.length; i++ ){
    rev_str += array[i];
    // console.log(rev_str);
}
if(name_arr == rev_str){
    console.log(name_arr + " is a palindrome");
}
else{
    console.log(name_arr + " is not a palindrome");
}