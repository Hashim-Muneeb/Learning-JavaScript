// iterate object

const person = {
    name: "hashim",
    age: 21,
    hobbies: ["videos games", "sleeping", "studing"]
}



for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
