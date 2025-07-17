// objects mai loop kesse lagaya jai 
const myObject ={
    js :- "Javascript",
    cpp :- "C++" ,
    rb :- "Rubby" , 
    swift :- "swift by apple"

}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js","cpp","ruby","c"]

for (const key in programming) {
    console.log (programming[key]);
} 



// const map = new Map() 
// map.set('IN', "India")
// map.set('US', "United States") 
// map.set('FR',"France")

// for (const key in map) {
//     console.log(key);
//     //  ase new map jo ki iteratable nhi hota hai
// }