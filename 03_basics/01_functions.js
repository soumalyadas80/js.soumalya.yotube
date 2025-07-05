function sayMyNmae(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("L");
    console.log("Y");
    console.log("A");  

}
sayMyNmae // ()  nhi dene se ou uska sirf reference hi bata ta hai
sayMyNmae()

function addTwoNumbers(number1 , number2){ // ( andar wale iha ke chizz ko parameters kaha jata haii)
    return number1 + number2

}
const result1 = addTwoNumbers(3,5)
console.log("Result:",result1);

addTwoNumbers(3,4) // ( andar wale iha ke chizz ko arguments kaha jata hai)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)



function addTwoNumbers(number1 , number2){ // ( andar wale iha ke chizz ko parameters kaha jata haii)
    let result = number1 + number2
    return result
    console.log("Hitesh");  // point to be noted that nothing will execute after return

}
const result2 = addTwoNumbers(3,5)
console.log("Result2:",result2);

function loginUsername(username){ 
    if( loginUsername === undefined){ // iha par value jab true hoga tab hi next line  jayega if ke baad
        console.log("Please Enter a username");
        return
        
    }
    return`${username} just logged in`
}
console.log( loginUsername("Soumalya"));
console.log( loginUsername());


