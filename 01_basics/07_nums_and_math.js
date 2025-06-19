const score = 400
console.log(score);

const balance = new Number(100.3223)
console.log(balance);
console.log(balance.toString().length);   // 100 ke andar 3 thooo character hai
console.log(balance.toFixed(2));   // means point ke baad two ghar hi likha jayegga

const otherNumber = 235.333
console.log(otherNumber.toPrecision(4)); // first Se kitna DIGIT tkk

const hundreds = 1000000
console.log(hundreds.toLocaleString(3));





// ++++++++++++++++ Maths +++++++++++++++
console.log(Math);
console.log(Math.abs(-40)); // abs means absolute value  // -ve ko +ve kar deta hai
console.log(Math.round(34.40)); 
console.log(Math.ceil(23.40)); 
console.log(Math.floor(34.40)); 
console.log(Math.min(2,3,4,8,40)); 
console.log(Math.max(2,24,4,4,5,6,60)); 

console.log(Math.random()); 
console.log((Math.random()*10)+1); 

const min = 20
const max = 30
console.log(Math.floor(Math.random() * (max-min+1))+min);
