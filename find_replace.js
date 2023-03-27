let sen = "First woman in asia";
let s = sen.split(" ");
let word = "asia";
let new_word = "India";
let final = "";

for(let i = 0; i < s.length; i++){
  if(word == s[i]){
    s[i] = new_word;
}
}
for(let i = 0; i < s.length; i++){
    final += s[i] + " ";
}
console.log(final);