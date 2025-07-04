const Jsuser ={
    name : "Soumalya" ,
    "full_name" : "Soumalya Das" ,
     mySym : "myKey1",
    age : 21 ,
    location : "Bhubaneswar" ,
    email : "soumalya8637@gmail.com" ,
    mobile_number : "863755XXXX" ,
    lastLoggedIn : "False" ,
    lastLoginDays : ["Monday","Wednesday","Sunday"]
}
Jsuser.greeting = function(){
    console.log("Hello Js padhne walo");
    
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.email}`);

    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
// ak undefined extra kiu aa raha hai ou pata nhi 
console.log(Jsuser.greetingTwo);// iha par () wala chizz na dene se output mai [Function (anonymous)] wala chizz ata hai