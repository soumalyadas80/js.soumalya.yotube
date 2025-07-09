const chai = function(){
    let username ="soumalya"  //function ke andar this ko nhi use kar pa raha
    console.log(this.username);
}   // terminal mai run karane se undefined aa raha
// chai()

const chai1 = () => {
    let username ="soumalya"  
    console.log(this.username);
}   // undefined hi ayega
// chai()
//(interview question) arrow function mai "this" use nhi kar sakte aur regular function mai kar sakte [❌]
   


// Now we start to learn something about Arrow function 
// explixit return(matlab ki return keyword lagana padh raha hai)
const addTwo =(num1,num2) => {
    return num1 +num2; // curly braces dia to return keyword dena padega
} // aur curly braces nhi dia to return keyword nhi dena padega
console.log(addTwo(3,2)) 

// by using Implicit return
// const addThree = (num1 ,num2 , num3) => (num1 +num2 +num3)
const addThree = (num1 ,num2, num3) => ({username:"soumalya"})
console.log(addThree(3,2,3));


