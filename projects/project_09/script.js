
const button = document.querySelector("#search")
// console.log(button);

button.addEventListener("click",function(but){
    let TextField = document.querySelector("#userName")
    let requestUrl = `https://api.github.com/users/${TextField.value}`
    showDetails(requestUrl)

})

const showDetails = function(requestUrl){
    const xhr = new XMLHttpRequest;
    xhr.open("GET",requestUrl)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
            console.log(data)
            let img = document.getElementById("image")
            img.setAttribute("src",data.avatar_url)
            document.getElementById("Name").innerText = data.login
            document.getElementById("bio").innerText = data.bio
            let link = document.getElementById("link")
            link.href = data.html_url
            link.innerText = data.html_url
            document.getElementById("followers").innerText = data.followers
            document.getElementById("location").innerText = data.location
            document.getElementById("Repo").innerText = data.public_repos


        }
        
    }
    xhr.send();
    
}

