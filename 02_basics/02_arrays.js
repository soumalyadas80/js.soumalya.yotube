const marvel_Heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_Heros.push(dc_heros)
console.log(marvel_Heros) // it is not a good way of merging 
// console.log(marvel_Heros[3][1]); // key access karne ke liye use hota hai  .. and it is not a good way
 
const all_Heros = marvel_Heros.concat(dc_heros)
console.log(all_Heros);

// spread(...) operator for joining two array 
const all_new_Heros = [...marvel_Heros , ...dc_heros, ]
console.log(all_new_Heros);

const another_array = [1,2,3,[[4,5],6,7,[5,8]]]
const real_another_array = another_array.flat(Infinity)
// flat() is ke andar 1,2,3, wagera dal sakte hai but infinity dalne se ak array ke andar hi pura aa jata hai

console.log(real_another_array);



console.log(Array.isArray("Soumalya"));
console.log(Array.from("Soumalya"));
console.log(Array.from({name:"Soumalya"})); // iha par empty array dega 
// {} -> wala sign object ka hai  // interesting interview question

let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));
