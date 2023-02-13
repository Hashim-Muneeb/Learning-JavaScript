// primitive  vs reference data types
// primitve dataypes are storred in stack
let num1 = 9;
let num2 = num1;
console.log("value of num1", num1);
console.log("value of num2", num2);

num1++;

console.log("AFTER INCREMENT");

console.log("value of num1", num1);
console.log("value of num2", num2);


// referance type
// values are storred in heap but displayed using a stack which conatains pointers 
// in which address of a array is storred

let array1 = [ "car", "bat"];
let array2 = array1;

console.log("array1", array1);
console.log("array2", array2);

array1.push("cat");

console.log("AFTER PUSHING VALUE")
console.log("array1", array1);
console.log("array2", array2);