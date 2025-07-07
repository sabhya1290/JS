const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)

    
    const result = document.querySelector("#result");
    
    if ( isNaN(height) ||  height === '' ||  height <= 0 ) {
        result.innerHTML = "Please enter valid height"
    }else if(isNaN(weight) || weight  === '' || weight <= 0){
        result.innerHTML = "Please enter valid weight"
    }
    else{
        const bmi = weight / ((height / 100) * (height / 100))
        if (bmi < 18.5) {
            result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)} <br> & you are underweight</span>`
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)} <br> & you are normal weight</span>`
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)} <br> & you are overweight</span>`
        }else{
            result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)} <br> & you are obese</span>`
        }
    }
})