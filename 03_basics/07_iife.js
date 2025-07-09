// global scope se polution nhi chahiye and ou immediately waha par execute ho jaye whi par
  

// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // named iife hai   jo ki chai
    console.log(`DB CONNECTED`);
})(); //semicolon mandatory
//global scope ke pollution hoti hai kayibar ..us pollution hatta ne ke liye use hota hai iife
// ()()     ---  iife

((name)  => {    // simple iife (jo ki witout name hai)
    console.log(`DB connected Two ${name}`);
    
} ) ("soumalya");


//dono iife ke bich mai semicolon must hai