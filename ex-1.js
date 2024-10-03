// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //fasle
Object.is(0, -0);//fasle
Object.is(NaN, 100);//fasle
Object.is("one", "two");//true
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });//true
Object.is(null, undefined);//fasle

10 === 20;//false
10 === "10"//false
3.14 !== 3.14; //false
"TechUp" !== "TechUp"; //false
NaN === NaN; //false
0 !== -0; //true

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB //true
