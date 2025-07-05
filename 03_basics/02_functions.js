// using rest operator 
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(288,347,374,878,983));

const user ={
    username :"soumalyadas80" ,
    price : "3242"

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user);


// in this way, you also write the code
handleobject({
    username : "soumalyadas787" ,
    price: "4833"
})

const myNewArr = [200,4000,398,888]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([2223,34,43,2,3]))

