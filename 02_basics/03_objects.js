//singleton --> literals mai singleton jassa nhi banta 
//singleton --> constructor saai always singleton jasa hi banega


// object literals --> objects ko declare karne ka tarika hai bass

const mySym = Symbol("key1") 
const Jsuser ={
    name : "Soumalya" ,
    "full_name" : "Soumalya Das" ,
     /* mySym : "myKey1" ,     --> erokom bhabe likhle symbol asbe na string dekhabe */ 
     [mySym] : "myKey1" , 
     mySym : "myKey1",
    age : 21 ,
    location : "Bhubaneswar" ,
    email : "soumalya8637@gmail.com" ,
    mobile_number : "863755XXXX" ,
    lastLoggedIn : "False" ,
    lastLoginDays : ["Monday","Wednesday","Sunday"]

 
}

console.log(Jsuser.email)
console.log(Jsuser["email"]);
console.log(Jsuser.full_name); // ase mat karna but kar bhi sakte ho tumhra icha 
console.log(Jsuser.lastLoggedIn);
console.log(Jsuser["full_name"]);
console.log(typeof Jsuser[mySym]); // is mai "" maat use karna.. symbol print karrwne ke samai 
console.log(Jsuser[mySym]); // isko print karwane ke liye ase hi likhna padega


 // objects ki values ko access kese karte hai ou upar dekh lia .. ab  values ko kesse change kia jata ai ou dekhenge 
  Jsuser.email = "soumalyadas80@gmail.com"
  Object.freeze(Jsuser)
  Jsuser.email = "22053200@kiit.ac.in"
  console.log(Jsuser);
  
