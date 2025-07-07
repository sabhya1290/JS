let randomNum = parseInt(Math.random() * 100 + 1 )

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".LowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number") 
    }else if(guess < 1){
        alert("Please enter a number greater than 0")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage("You guessed it right")
        endgame()
    }else if (guess < randomNum){
        displayMessage("Number is TOOOO low")
    }else if (guess > randomNum){
        displayMessage("Number is TOOOO high")
    }
}

function displayGuess(guess){
   userInput.value = ""
   guessSlot.innerHTML += `${guess}  `
   numGuess++
   remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endgame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p) 
    playGame = false
    newgame();
}


function newgame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(){
        randomNum = parseInt(Math.random() * 100 + 1 )
        prevGuess = []
        numGuess = 1
        playGame = true
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        lowOrHi.innerHTML = ""
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)

        playGame = true;
    })
}