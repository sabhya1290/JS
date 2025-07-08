const buttons = document.querySelectorAll('button');
// console.log(buttons);
let startOrStop = null;

buttons.forEach(function(button){
    button.addEventListener("click",function(e){

        if(e.target.innerText == "Start"){
            if(!startOrStop){
            startOrStop = setInterval(colorChanger,1000)
            }
            
        }

        if (e.target.innerText == "Stop"){
            clearInterval(startOrStop)
            startOrStop = null
            
        }
    })
})

function colorChanger(){
    
    const hex = '0123456789ABCDEFG'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = color






    // // forEach(function(num){
    // document.body.style.backgroundColor = `#${Math.abs(Math.round(Math.random()*10-1))}${Math.abs(Math.round(Math.random()*10-1))}${Math.abs(Math.round(Math.random()*10-1))}${Math.abs(Math.round(Math.random()*10-1))}${Math.abs(Math.round(Math.random()*10-1))}${Math.abs(Math.round(Math.random()*10-1))}`
    // // })
}
