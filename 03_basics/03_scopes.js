
// {} is curyl braces ko hi scope bola jata hai 
// var c = 300
const b =23

let a = 200 // global  scope
if(true){
    let a = 23 // local scope
    const b = 233
    console.log("Inner:",a);
    
}
console.log(a);
console.log(b);
//console.log(c);

/* local scope ke andar yadi var mai kuch declare karo then global scope uski value kuch bhi dalo
local scope wala hi rrahega */

/* Browser ke andar inspect mai jake console ke andar scope alag hai 
aur  codespace mai node ke andar ka scope alag hai */


// DOM -> means document object model
