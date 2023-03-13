// JSON represention 
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 0. Given a name find it in the array of students. 
// 1. a. Find the eldest student, it should print the name of the student, 
//	b. find the student who earns the least stipend
// 2. Find the students whose physics score is more than 70
// 3. Count the number of students whose total average is more than 70. 

let students_db_array = [
    {name:"Kishore",
     age: 19, 
     stipend: 1000, 
     marks:{maths: 50, physics:79, chemistry:80}},
     {name:"Razzak",
     age: 18, 
     stipend: 10000, 
     marks:{maths: 80, physics:75, chemistry:70}},
     {name:"Ajmal",age: 18, stipend: 10000, 
     marks:{maths: 35, physics:45, chemistry:50}},
    {name:"Aishwarya",age: 21, stipend: 10000, 
     marks:{maths: 65, physics:80, chemistry:85}}		 ];
     
    let x = "Ajmal";
    let exist = false;

    for(let i = 0; i <students_db_array.length; i++){
        if(students_db_array[i].name === x){
            exist = true;
            break
        }
    }
    if(exist == true){
        console.log(x + "is found in an array");
    }
    else{
        console.log(x + "is not found in an array");
    }





// console.log(students_db_array[1].age);

// let i = 2;
// console.log(students_db_array[i].name==="Razzak");