const buttons =document.getElementsByClassName("button")
const textfield = document.getElementById("textfield")
console.log(buttons)

let buttons_array = Array.from(buttons)
buttons_array.forEach(function(button){
    button.addEventListener("click",function(e){
        e.preventDefault()
        chechOperator(e.target.innerText)

    })
})

function chechOperator(operator){
    
    textfield.value += operator

    if (operator === "+"){
        let firstNumber = (textfield.value)
        console.log(firstNumber)
        textfield.value = ""
        let secondNumber = (textfield.value)
        calculate(firstNumber,secondNumber,operator)
    }

    if (operator === "C") {
        textfield.value = ""
    }

}


function calculate(firstNumber,secondNumber,operator){
    // let result = 0
    if (operator === "+"){
        let result = `${firstNumber}${secondNumber}`
        textfield.value = result
    }
}
