const accountId = 12345
let accountEmail = "example@gmail.com"
var accountPassword = "password123"
accountCity = "New York"

// accountId = 67890 //Not allowed
accountEmail = "newEmail@gmail.com" //Allowed   
accountPassword = "newPassword" //Allowed but dont use var because of issue in block scope and functional scope 
accountCity = "Los Angeles" //Allowed still dont use

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// We only use let and const for variable decleration in modern JS