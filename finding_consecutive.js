let a =[4 ,3, 10, 11, 1, 18, 4];
let k =3;
let arr = [];

for(let i =0; i < a.length - (k-1);i++){
    let sum = 0;
    let match = 0;

    for(let j =i; sum < k;j++){
        match += a[j];
        sum++
    }
    arr.push(match)
}
// console.log(arr);
let  max = arr[0];

for(let i = 1; i < arr.length; i++ ){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);
