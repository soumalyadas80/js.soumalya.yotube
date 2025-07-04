// Non -singleton object
const tinderUser1 = {}
console.log(tinderUser1);

// singleton object

const tinderUser = new Object()
tinderUser.id ="123456aggga"
tinderUser.name = "Soumalya"
tinderUser.isloggedIn ="False"
// console.log(tinderUser);

const regularUser = {
    email:"madhu@gmail.com",
    fullname:{
        username:{
            firstname: "Soumalya",
            lastname: "Das"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.username.firstname);

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a" , 4:"b"}
 //const obj3 = {obj1,obj2}
 //const obj3 = Object.assign({}, obj1 ,obj2 );  // {} ata diteu paris ata target dhora hbe ar bki sav source obj1,obj2 etc ..ar na dile obj1 target hbe
const obj3 = {...obj1 , ...obj2}
 console.log(obj3)


 const users =[
    {
        id:"12",
        name : "soumik"
    
    },
        {
        id:"13",
        name : "sourav"
    
    },
        {
        id:"14",
        name : "harsh"
    
    },

]

users[1].email
console.log(tinderUser);
//array jassa hi likha hua ayega 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isloggedIn"))
console.log(tinderUser.hasOwnProperty("islogged"))