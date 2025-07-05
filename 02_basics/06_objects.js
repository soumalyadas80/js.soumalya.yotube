// array ki bhi de structuring hota hai 
// but aj object ka de structuring dekhenge 
const course ={
    coursename : "striver Dsa " ,
    coursePrice : "2332" ,
    courseInstructor : "Raj"

}
//course.courseInstructor
const {courseInstructor:Instructor} = course
//console.log(courseInstructor);
console.log(Instructor); // courseInstructor ke jaga Instructor likhna ihi hai  de structuring

/* const navbar = ({companny} ) => {

}
navbar(company ="soumalya")       // {} ka matlab de structuring */
   



// API matlab khud ka kam dusre ke kandhe pe thopna 
// JSON API ai ak object hi hai 
// API mai sab kuch string hi hota hai 
// API jo ki array ki format mai bhi hota hai
 

// objects
{
    "name" = "Soumalya" ,
    "courseName" = "JS sheekho" ,
    "coursePrice" = "12333"
}

// Arrays
[
    {} ,
    {} ,
    {}
]

// Randomuser me   is a very famous API
// JSON formatter is also a very good tool
//JSON -> JSON is a javascript object notaion