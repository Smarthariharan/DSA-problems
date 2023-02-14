let a =[5, 66,10, 20, 10, 1, 10 ];
let x = 10;
let z = 0;

for(let i = 0; i < a.length; i++){
    if(x === a[i]){
        z = z+1;
    }
    if(z == 1){
        console.log(x + "is found 1 time");
    }
    else if(z!= 0){
        console.log(x + "is found" + z + "times");
    }
    else {
        console.log(x + "is not found"); 
    }
}