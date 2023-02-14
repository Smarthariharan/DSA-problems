
//    1
//   2 1
//  3 2 1
// 4 3 2 1
n = 10;
for (i = 1; i <= n; i++){
 console.log( getSpaces((n - i + 1) ) + getNumSequence(i) )
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
//   let str = ""
// for (let i = 1; i <= n;i++){
//     str += i +" "
//     let num = ""
//     for(let j = i; j >= 1;j--){
//     num += j + " "
//     }
//     console.log(num)
// }
function getSpaces(n) {
    let str = "";
    for(let i = 1; i <= n ; i++) {
       str = str + " ";
    }
    return str;
 }