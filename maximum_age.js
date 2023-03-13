let students_db_array = [
    {name:"Kishore",
     age: 24, 
     stipend: 1000, 
     marks:{maths: 50, physics:79, chemistry:80}},
     {name:"Razzak",
     age: 22, 
     stipend: 10000, 
     marks:{maths: 80, physics:75, chemistry:70}},
     {name:"Ajmal",age: 18, stipend: 10000, 
     marks:{maths: 35, physics:45, chemistry:50}},
    {name:"Aishwarya",age: 21, stipend: 10000, 
     marks:{maths: 65, physics:80, chemistry:85}}		 
    ];
     
     let max = students_db_array[0];

     for(let i = 0; i < students_db_array.length; i++ ){
        if(max.age < students_db_array[i].age) {
            max= students_db_array[i];
        }
     }
     console.log(max.name);
     
