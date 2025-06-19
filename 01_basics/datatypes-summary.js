// data ko store karne ke prospective se data ko two parts mai divide kia gya hai primitive & non-primitive 

// primitive 
   // 7 types: String , Number , Boolean , null (iska matlab hai empty) , undefined , Symbol , BigInt

// Javascript is a dynamically typed language 

const score = 100
const scoreValue = 100.8
const isLoggedIn = true
const outSideTemp = null
let userEmail;
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId)

//const bigNumber = 2374757747484n
//console.log(bigNumber)


// non-primitive ( Reference )
  // Arrays 
  const currenncy = ["Rupee","Dollar","Ruble","Takka","Dinar","Euro","Wuhan","Ringgit"]


  //  Objects 
  let myObj =   {
   name : "Soumalya",
   age : 22 , 
   weight : 67


  }


  //  Functions

  const myFunction = function(){
   console.log("Hello World!")
  }

  console.log(typeof bigNumber);
 console.log(typeof (outSideTemp));
  console.log(typeof (myFunction));
  console.log(typeof (soreValue));