// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1  for

let n = 4;

// for left triangle
// 1
// 1 2
// 1 2 3
// 1 2 3 4
function getNumSequence(n) {
	let numseq_str = "";
	for(let i = 1; i <= n; i++) {
		numseq_str = numseq_str + " " +  i ;
	}
	return numseq_str;
}
 for(let i = 1; i <= n; i++){
  console.log(getNumSequence(i))
 }
//  now for
//         1
//       2 1
//     3 2 1
//     3 2 1



