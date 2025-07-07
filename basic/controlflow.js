// console.log("sabhya");
// let balance = 200 ;

// if (balance > 500) {
//     console.log("You are rich");
// }
// else if (balance > 100) {
//     console.log("You are middle class");
// }
// else {
//     console.log("You are poor");
// }

const arr = [
    {name : "Sabhya", age : 20},
    {name : "Sabhafsdafya", age : 20},
    {name : "Sabhadfsya", age : 20},
    {name : "Saadfsa", age : 20}
];

arr.forEach( (item) => {
    for (const key in item) {
        // console.log(key, item[key]);
    }
})

const greet =() => ( "Hello") 
// console.log(greet());

(function myfunc() {
    console.log(`Hello `);
})();

