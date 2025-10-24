let username: string = "Parmesh";
let greeting: string = `Hello, ${username}!`;

console.log(greeting); 

let a:number=33;
let b:number=7;
console.log(a+b); 

let t:boolean=true
let f:boolean=false
if(t) console.log("boolean")


let Inp: any = "rently";
Inp = [1, 2, 3];
console.log(Inp);    


let myArray: any[] = [];

myArray.push(2);
myArray.push(false);
myArray.push({ key: "value" });

console.log(myArray);


// let data: any;
// data = "Hello";
// data = 42;
// data = { name: "Parmesh" };


// console.log(data.toUpperCase());

//tuple
let user1: [string, number] = ["Parmesh", 25];
console.log(user1)


let d: unknown;

d = "Hello";
d= 42;
d= { name: "Parmesh" };
d= "Hello";
d=0;

if (typeof d === "string") {
  console.log(d.toUpperCase());
}


let num1: null;
num1 = null;
// Displays null
console.log(num1); 
num1 = undefined;
// Displays undefined
console.log(num1);
num1 = 20;
// Raises error
console.log(num1);
//We can not assign values of other types to a 
// variable that is declared as a null type. only null and undefined can be assigned.

//Interface

// interface User{
// username:string;
// mailid:string;
// }

// const newuser : User={
//     username:"parmesh",
// mailid:"qwerty@fgh"
// }
// console.log(`User: ${newuser.username}, Email: ${newuser.mailid}`);

// interface User {
//   name: string;
//   age?: number; 
//   readonly title: string;
// }
// const p: User = { name: "Ravi" , title: "Laptop" };
// console.log(p);

// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   ph: number;
// }

// const emp: Employee = {
//   name: "Parmesh",
//   ph: 50000,
// };
//  console.log(emp);

interface A {
  name: string;
}

interface A {
  age: number;
}

// merges automatically
const z: A = { name: "Tommy", age: 3 };

console.log(z);


//Type
type Person = {
  name: string;
  age: number;
};


const p: Peron= { name: "qwertyui", age:6 };
console.log(p);

type Employee = Person & { salary: number };
//merging in type
const ep: Employee = {name: "Ravi",age:6,salary: 60000,};
console.log(ep);
// type cannot automatically merge like interface


//type can be used in mny non-primitive tpes..like ubion,tuple..etc..but interfaces cannot be used
type ID = string | number; 
type Point = [number, number]; 
type fun = (msg: string) => void;


//function with types
function greet(name: string, age: number) {
  console.log(`${name}, ${age} years old.`);
}
greet("Parmesh", 20);   

//return type
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(99, 20));

//void return type
function logMessage(msg: string): void {
 console.log(msg);
//   return (`hi ${msg}`)
}

logMessage("hi"); 


