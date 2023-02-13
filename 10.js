// object inside array
const users = [
    {userId : 1 , name : "hashim"},
    {userId : 2 , name : "waseem"},
    {userId : 3 , name : "tooba"}
]
console.log(users)

for(let user of users){
    console.log(user.name);
}

