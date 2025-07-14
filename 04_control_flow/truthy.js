const userEmail = "soumalya@gmail.com"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
    
}


/* falsy values 
false , 0 ,-0, BigInt , "" , null, undefined, NaN(isko not a number bola jata hai) */

/* truthy values
"0" -> string ke andar yadi 0 hai to ou truthy values hai
'false' ->string ke andar yadi 0 hai to ou truthy values hai
" " , [] , {} , function(){}     */


// if (userEmail.length ===0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
 // false == 0    -> true
 // false == ''     -> true
 // 0 == ''      -> true

// Nullish Coalescing Operator (??) : null undefined 

let val1 ;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // ismai jo first value milta hai usko hi return kar deta hai

console.log(val1);

//Teniary operator
//condition ? true : false
const iceTeaPrice  = 100
iceTeaPrice <= 80 ?console.log("less than 80"):console.log("More than 80");
 

