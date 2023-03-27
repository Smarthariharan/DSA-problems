// let a = [13,11,13,4,10,9,1];
// let x = [11,11,13,4,17,4];
// let z = 0;

// for(let i =0; i < a.length; i++){
//   if(a[i] === x[i]){
//     z = z + 1;
//   }
//   if(z = 1){
//     console.log(x[i] + "is found" + 1 +"time")
//   }
//   else if(z != 0){
//     console.log(x[i] + "is found" + z + "times")
//   }
//   else{
//     console.log(x[i] + "is not found ")
//   }
// }








// let n = 12;

// if(n%1 === 0 && n%n === 0){
//   console.log(n + "is a prime number")
// }
// else{
//     console.log(n + "is not a prime number")

// }

let num = 5;
let isPrime = true;

if (num <= 1) {
  console.log(num + " is not a prime number");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
}



// let a = [13,11,13,4,10,9,1];
// let x = [11,13,4,17];
// let z = 0;


// for(let i =0; i < a.length; i++){
//   if(a[i] === x[i]){
//     z = z + 1;
//   }
//   if(z = 1){
//     console.log(x[i] + "is found" + 1 +"times")
//   }
//   else if(z != 0){
//     console.log(x[i] + i)
//   }
// }