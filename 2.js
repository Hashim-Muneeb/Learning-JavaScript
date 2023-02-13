// Clone array

let array1 = [ "car", "bat"];
//method 1 slice
let array2 = array1.slice(0);

//metghod 2 concat
// let array2 = [].concat(array1);

// method 3 spread 
// let array2 = [...array1]

console.log("array1", array1);
console.log("array2", array2);

array1.push("mouse");


console.log("array1", array1);
console.log("array2", array2);