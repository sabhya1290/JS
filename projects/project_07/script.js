const buttons = document.querySelector("#task").children

let table = document.createElement("table")
table.setAttribute("class","min-w-full border border-gray-300 space-x-4 mt-4")
let thead = document.createElement("thead")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
th1.setAttribute("class","px-4 py-2 bg-[#1a1945] w-2/3")
let th2 = document.createElement("th")
th2.setAttribute("class","px-4 py-2 bg-[#0b8f93] w-1/3")
th1.innerText = "Task"
th2.innerText = "Status"
tr.appendChild(th1)
tr.appendChild(th2)
thead.appendChild(tr)
table.appendChild(thead)


Array.from(buttons).forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.innerText === "Add Task"){
            addTask()
        }
        if(e.target.innerText === "Remove Task"){
            removeTask()
        }
        if(e.target.innerText === "Clear Task"){
            clearTask()
        }
    })
})
function addTask(){
    
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)
    document.querySelector("#task").children[2].removeAttribute("disabled")
    document.querySelector("#task").children[1].removeAttribute("disabled")
    
    let tr = document.createElement("tr")
    tr.setAttribute("class","border border-black")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.setAttribute("class","px-4 py-2 border")
    td2.setAttribute("class","px-4 py-2 border")
    td1.innerHTML = `<input type="text" class="w-full border border-[#2C3333] p-0.5">`
    td2.innerHTML = `<input type="checkbox" class="size-4 w-2/2 accent-green-600">`
    const input = td1.querySelector('input');
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            input.classList.remove("border")
            input.disabled = true;
            
        }
    });

    tr.appendChild(td1)
    tr.appendChild(td2)
    tbody.appendChild(tr)
    document.querySelector("#container").appendChild(table)

}
function removeTask(){
    let tr = document.querySelector("tbody")
    tr.remove()
}
function clearTask(){
   let tbody = document.querySelectorAll("tbody")
   tbody.forEach(function(tbody){
    tbody.remove()
   })
   document.querySelector("#task").children[2].setAttribute("disabled","disabled")
   document.querySelector("#task").children[1].setAttribute("disabled","disabled")

}
