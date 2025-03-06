
let names:string[] = ["sabu", "bheem", "chacha","choudhary"];
console.log(names[0]);

//generics
let empnames : Array<string> = ["aloo", "matar", "paneer","mushroom"];
let empIds : Array<number> = [1,2,3,4];

//multi type array
let values :(string | number)[] =["tom", 100, "jerry", 200];
let val :Array<string | boolean> = ["tom", true];

//first array decleration and assign later
let users: Array<string>;
users = ["batsmen", "bowler"];

//index based loop
let employees : Array<string> = ["aloo", "matar", "paneer","mushroom"];
for(let i=0;i<employees.length; i++){
    console.log(employees[i]);
}
 //2. for in loop

 for(let e in employees){

    console.log(e +":" + employees[e]);
 }











