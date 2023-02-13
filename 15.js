function addAll(...num){
    console.log(num);
    var total;
    for(let i =0; i<num ; i++){
        total = total+num;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9,0,12,13,14);
console.log(ans)