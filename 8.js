// Spread Operator


const obj1 ={
    key1 : "value1",
    key2 : "value2",
    key3 : "value70"
}

const obj2 ={
    key4 : "value1",
    key5 : "value2",
    key6 : "value70"
}

const newObj ={
    ...obj1, ...obj2, name: "hashim"
}

console.log(newObj);