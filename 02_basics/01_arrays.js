// Array

// const Arr = [ 1, 2, 3, 4, "soumalya", true]  // different elements bhi ho sakte hai

const arr =[31,1,2,3,4,5] // Js ke array's resizeable hote hai 
const arr2 = new Array(1,2,3,4)
console.log(arr[0]);
console.log(arr2[2]);

//Array Methods 
arr.push(6)
arr.push(7)
console.log(arr);
arr.pop()
console.log(arr);

// unshift laga ne se array ke pahale add hota hai
arr.unshift(34);
console.log(arr);

// SHIFT BHI USE KAR SAKTE HO .. pahale ka element ko hatane ke liye
arr.shift()
console.log(arr);
 // true & false mai ans dene ke liye includes use hota hai

 console.log(arr.includes(3));

 console.log(arr); // ye array check karne ke liye likha hua hai bas 
 console.log(arr.indexOf(34)); // array mai exist karta hai kya nhi .. iha par -1 ke mtlb exist nhi karta 
 

 const myArr = arr.join()
 console.log(myArr);
 console.log(typeof myArr);  // join lagane se type change kar deta hai .. iha par jesse array se string pe convert kar dia hai 
 

 // Slice & Splice 
 //slice
 console.log("A", arr);
 const myn1 = arr.slice(0,3)
 console.log(myn1)
 console.log("B", arr)
 // Splice
 const myn2 = arr.splice(0,3)
 console.log("C", arr);
 console.log(myn2)   // splice mai array se portion hi nikal jatta hai aur original array ko manipulate karta hai 

 // interview mai nhi bolna hai ki splice & slice mai last wala portion sirf add & remove hota hai



 







 