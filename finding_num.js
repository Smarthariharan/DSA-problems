let a = [5, 80, 4, 8, 12, 3, 1];
x = 7;
let str = "" ;
let Exist = false;

for(let i = 0; i < a.length; i++){
    if(a[i] === x)
    Exist = true;
    
}


if(Exist == true){
    str = x + "is found in an array"
}
else{
    str = x +"is not found in an array"
}