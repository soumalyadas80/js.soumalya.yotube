//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(typeof myDate);


let myCreateDate = new Date(2025,6,31)
console.log(myCreateDate.toDateString());

let myCreatedDay = new Date("12-9-25")
console.log(myCreatedDay.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDay.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
