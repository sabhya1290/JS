// // singleton

// // objects litrals

// const mysbyl = Symbol("key1")

// const jsUser = {
//     name : "Sabhya",
//     "full name": "Sabhya Singh",
//     age : 20,
//     [mysbyl]: "key1",
//     email : "sabhya@gmail.com",
//     location : "jaipur",
//     hobbies : ["reading", "coding", "gaming"],
//     occupation : "Software Engineer",
//     isEmployed : true,


// }
// // console.log(jsUser.age);
// // console.log(jsUser["age"]);
// // console.log(jsUser.full name); // error
// // console.log(jsUser["full name"]); // correct way to access property with space in property name

// // console.log(jsUser.email);

// // jsUser.email = "sabhya12@gmail.com"
// // console.log(jsUser.email);

// // Object.freeze(jsUser)
// // jsUser.email = "sabhya13@gmail.com"
// // console.log(jsUser.email); // error

// console.log(jsUser);


// jsUser.greeting = function(){
//     console.log("Hello !!");
    
// }
// jsUser.greeting(); 

// jsUser.greetingTwo = function(){
//     console.log(`Hello ${this.name} !!`);
    
// }
// jsUser.greetingTwo(); 



const jsUser = function() {
    let name = "Sabhya";
    console.log(this)
}
jsUser()