// Given a array find the maximum number in that array
// a = [3, 15, 78, 100, 65]

let a = [3, 15, 78, 100, 65];

// For maximum

let max = a[0];
for(let i = 1;i < a.length; i++ ){
  if (max < a[i]){
    max = a[i];
  }
}
console.log(max)

// For minimum

let min = a[0];
for (let i = 1; i < a.length; i++){
    if(min > a[i]){
        min = a[i];
    }
}
console.log(min);