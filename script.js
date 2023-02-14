// 1
// 234
// 56789

let n =3;

for(let j = 1; j <= n; j++){
  console.log(getNumSequence(n))
}

function getNumSequence(n) {
  let str = ""
for (let i = 1; i <= n;i++){
  str += i +" "
  let num = ""
  for(let j = i; j >= 1;j--){
  num += j + " "
  }
}
return str;
}


