const form = document.getElementById('github-form')
const list= document.getElementById('user-list')
const repos= document.getElementById('repos-list')

form.addEventListener("submit", function(e){

    e.preventDefault()

    list.innerHTML=""
    repos.innerHTML=""

    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(res => res.json())
    .then(usersData => usersData.items.foreach(userInfo))

})

function userInfo(userData){
    const name= document.createElement("li")
    name.textContent= usersData.login;

    const avatar = document.createElement("img")
    avatar.src=  userData.avatar_url;
    avatar.alt = `${userData.login} avatar image`

    avatar.addEventListener("click", (e)=>handleClick(userData))

    const profilelink= document.createElement("a")
    profilelink.href = userData.html_url;
    profilelink.textContent = "Github Account"

    list.append(name,avatar, profilelink)
}

function getRepo(userData){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res=> res.json())
    .then(userRepos=>{
        list.innerHTML=""
        userInfo(userData)
        userRepos.foreach(renderRepos)
    })
}

function displayRepos(user){
    const li= document.createElement("li")
    li.textContent= user.name
    repos.append(li)
}