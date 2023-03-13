// Given a array find the maximum number in that array
// a = [3, 15, 78, 100, 65]

// let a = [3, 15, 78, 100, 65];

// For maximum



// let max = a[0];
// for(let i = 1;i < a.length; i++ ){
//   if (max < a[i]){
//     max = a[i];
//   }
// }
// console.log(max)

// For minimum

// let min = a[0];
// for (let i = 1; i < a.length; i++){
//     if(min > a[i]){
//         min = a[i];
//     }
// }
// console.log(min);

// let c = [3,2,1,3,3];

// let max = c[0];

// let maxsum = 0 ;

// for(let i = 0; i < c.length;i++){
//   if(max < c[i]){
//     max = c[i];
//   } 
// }
// for(let j =0; j < c.length;j++){
//   if(max == c[j]){
//     maxsum += 1;
//   }
// }
// console.log(maxsum);

// let array= [2,3,5,1,4];
// for(let i =0;i < array.length;i++){
//   for(let j =0; j < array.length -1; j++){
//     let num = array[j];
//     if(num > array[j+1]){
//       array[j] = array[j +1]
//       array[j + 1] = num
//     }
//   }
// }
// console.log(array);

let arr = [-4, 3, -9, 0, 4, 1];


let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive+=1;
  } else if (arr[i] < 0) {
    negative+=1;
  } else {
    zero+=1;
  }
}

let positiveRatio = positive / arr.length;
let negativeRatio = negative / arr.length;
let zeroRatio = zero / arr.length;

console.log(positiveRatio.toFixed(6));
console.log(negativeRatio.toFixed(6));
console.log(zeroRatio.toFixed(6));

