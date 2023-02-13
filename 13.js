// lexical Scope and functions 

function myApp(){
    const myvar = "value1"
    function myFun(){
        const myvar = "value100"
        console.log("inside function", myvar)
    }

    const myFun2 = function(){}
    const myFun3 = () => {}


    console.log(myvar);
    myFun();
}
myApp();