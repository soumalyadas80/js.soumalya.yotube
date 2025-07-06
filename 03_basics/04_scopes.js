function one(){
    const username = "soumalya"
    function two(){
        const website= "youtube"
        console.log(website);
        console.log(username);
        }
        two()
    }
 //one()

 if(true){
    const username = "soumalya"
    if(username === "soumalya"){
        const website ="youtube.com"
        console.log(username+website);
        console.log(website);
    }
            console.log(username); // curly braces dekhna kuch print karwane ke pahale 
        
}  



// ++++++++++++++++ INTERESTING CONCEPT +++++++++++++
console.log(addOne(5));  // app pahale bhi likh sakte hai ,becz js mai line by line code nhi chalta

function addOne(num){      // it is a function
    return num+1;

}


const addTwo = function(num){     // It is a expression type function 
    return num+2         // expression ke pas itna acapability hota hai ki function ko bhi store kar leta hai
}   //  js mai variables kaffi powerful hotei hai, ou kuch bhi hold kar sakta hai

console.log(addTwo(5));   // variable mai hold karne se isko upar function call nhi kar sakte 
// means app declaration se pahale ap use nhi kar sakte 


 

