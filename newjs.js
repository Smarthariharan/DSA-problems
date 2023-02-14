// for
// 1
//   2
//     3
//       4
//          3
//            2
//               1
let n = 4;

// for
// . 
// ..
// ...
// ....

function getSpaces(n) {
  let str = "";
  for(let i = 5; i < n ; i++) {
     str = str + "  ";
  }
  return str;
} 

// now for 1
//         2
//         3
//         4

function getnumbers(n){
  let num = 0;
  for (let  i = 1; i <= n; i++){
    num =+  "" + i ;
  }
  return num;
}

// now for 1 
//           2
//             3
//              4
// for upper cross line
for (let i = 1; i <= n; i++){
  console.log(getSpaces(n + i) +  getnumbers(i))
}
// now for 3
//           2
//             1
function getrevnum(n) {
  for (let i = n; i >= 1; i--) {
    let revnumber = '      ';
    for (let j = 1; j <= n + 1 - i; j++) {
      revnumber += '  ';
    }
    console.log(revnumber + i);
  }
}
getrevnum(n - 1 );
