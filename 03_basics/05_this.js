// current con-text ko refer ke liye this keyword use hota hai 
    const user ={
    username : "soumalya",
    price: 999,

    welcomeMessage: function(){ // curly braces ke andar wala context username ko refer ke liye this keyword use hota hai
          console.log(`${this.username}, welcome to website`);
          console.log(this); //to ai username change hone ke before wala then after wala sara print karwake dega
          
    }


}
// user.welcomeMessage()
// user.username ="Ram"
// user.welcomeMessage()
// console.log(this); //ham log abhi node environment ke andar hai ..jo ki abhi ak empty object ko refer kar raha hai
// browser ke andar jo global object hai usko bola jata hai "window object"

function chai(){
    let username ="soumalya"  //function ke andar this ko nhi use kar pa raha
    console.log(username);  
    console.log(this.username); //function ke andar ydi this ko print karate hai to bohot sarei chizz a jati hai  
}  // DOM mai manipulation ke tie ai savv concept need hai
chai()
