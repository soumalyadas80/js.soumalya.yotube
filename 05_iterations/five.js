const coding =["js","py","ruby","c++"]

// coding.forEach( function (val) {
//     console.log(val);
    
// })

 // by using arrow function
 coding.forEach((item) =>{
    console.log(item);
 })

 function printMe(item, index,arr){
    console.log(item,index,arr);
 }
 coding.forEach(printMe)



 const myCoding = [
    {
        languageNmae : "cpp",
        languageFileName :"C++" 
    },
      {
        languageNmae : "java",
        languageFileName :"java" 
    },
      {
        languageNmae : "javascript",
        languageFileName :"js" 
    },
      {
        languageNmae : "python",
        languageFileName :"py" 
    }
 ]
 myCoding.forEach((item) => {
    console.log(item.languageFileName);
    
 }) // array ke anadar object ke andar se value nikal li