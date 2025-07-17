// for of 

// [ "", "" , "" ]
// [ {} , {} , {} ] 
const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
    
}
const greetings = "Hello World !"
for (const greet  of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps 

const map = new Map() // Map khud ba khud ak object hai
map.set('IN', "India")
map.set('US', "United States")
map.set('FR',"France")
// map.set('IN', "India") // map unique value hoga ,don't allow duplicate data on it

console.log(map); // arrya jasa print ho jata hai 
 // Maps iteratable hotei hai 
for (const [key,value] of map) {
    console.log(key, ':-' ,value);
} // array ka de structure kar dia 


// objects ko  iterate karwaneke dusre tarike hotei hai
// const myObject ={ // object bana  kar kia 
//     'game1':'NFS' ,
//     'game2' : 'Spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-' ,value);
// } 

// ase objects ke upar forof nhi lagga sakte 
