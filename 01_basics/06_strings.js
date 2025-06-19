const name= "Soumalya"
const repoCount = 500
//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('soumalya-das')
console.log(gameName[0]); 
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const newString =  gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "    Soumalya    Das   "
console.log(newStringOne);
console.log(newStringOne.trim()); // spaces hatta deta hai agei aur piche kaaa


const url = "https://soumalyadas.com/soumalya%20das"
console.log(url.replace('%20','-'))            // replace kar deta jisko tumko replace karna hai url pai

console.log(url.includes('ravi'))  // ravi hai kya nahi url ke andar
console.log(url.includes('das'))  // das hai kya nahi url ke andar

console.log(gameName.split('-'));