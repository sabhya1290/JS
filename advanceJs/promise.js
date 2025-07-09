const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
        
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 complete");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 consumed");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"ss",email:"example@ex.com"})
    },1000)
    
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"ss",password:"1234"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => console.log("your promise is either resolve or rejected")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS",password:"1234"})
        }else{
            reject("Error: JS went wrong")
        }
    },1000)

})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log((response));
    
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

// const getAllUser = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E",error)
//     }
    
    
// }

// getAllUser()

fetch("https://api.github.com/users/hiteshchoudhay").then(function(response){
    return response.json()
}).then((data) => console.log(data))
.catch((error) => {
    console.log(error);
    
})