// there are to types of memories are present stack & heap

// Stack(Primitive type)    // Heap  (Non-primitive)
let myEmail = "soumalyadas80@gmail.com"
let another_myEmail = myEmail
myEmail = "soumalyadas787@gmail.com"
console.log(myEmail);
console.log(another_myEmail);


let user1 ={
    email : "soumalyadas80@gmail.com" ,
    upi : "8637557035@ybl" ,
}
let user2 = user1;
user2.email = "22053200@kiit.ac.in"
console.log(user1.email);
console.log(user2.email);
