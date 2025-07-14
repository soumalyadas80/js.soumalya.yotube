// if statement

if(true){ 
 // ai wala code if ke andar wala execute hoga 
}
if(false){ 
 // ai wala code if ke andar wala execute nhi hoga 
}
const isUserloggedIn = true
if(isUserloggedIn ){ 
 console.log("Hi welcome");
 
}
if(2 == "2"){ 
 console.log("Hi Users welcome");
 
}
if(isUserloggedIn ){ 
 console.log("Hi welcome");
 
}
if(2 === "2" ){ 
 console.log("Hi");
 
}
const temparature =41
if(temparature ===41){
    console.log("bohot garmi hai");
    
}

/*
3!=2
< , > , <=, >=, !=, == ,=== ,!==

*/

const score =200
if (score>100){  // use kar sakte ho let ,const
    const power ="fly"  // var use karoge to ou if ke bahar bhi use ho jayega ..uska scope se ou jada ho jata hai
    console.log(`user power: ${power}`);
}
const balance = 1000
 // if(balance >500) console.log("test") , console.log("test"); // this type of writing code should not be allowed

if(balance > 500){
    console.log("less than 500");
} else if(balane <750){
    console.log("less than 750");
}else if(balance< 900){
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if( userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");
}


