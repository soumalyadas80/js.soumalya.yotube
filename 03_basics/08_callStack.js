function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
    // one()    // ai dalne se code infinite loop mai fashh jata hai
}
 one()
 two()
 three()