// users list render start
let userList = document.querySelector(".users-list")
fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
    renderUsers(data)
})
 function renderUsers(arr){
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-xl text-center text-[#00A97F] space-y-2 font-bold"
        elItem.innerHTML = `
        <p><strong>ID:</strong>${item.id}</p>
        <p><strong>Name:</strong>${item.name}</p>
        <p><strong>Username:</strong>${item.username}</p>
        <p><strong>Email:</strong>${item.email}</p>
        <p><strong>Phone Number:</strong>${item.phone}</p>
        <button onclick="hanleUserPost(${item.id})" class="btn">Posts</button>
        `
        userList.appendChild(elItem)
    })
 }
// users list render end

// Post list start
let elPostList = document.querySelector(".posts-list")
function hanleUserPost(id){
    elPostList.innerHTML = `
       <img class='mx-auto scale-[1.2] mt-[200px]' src="./images/loading.svg" alt="loading" width="100" />
    `
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
        setTimeout(() => renderPost(data), 1000)
    })
}
function renderPost(arr){
    elPostList.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-xl text-center text-[#00A97F] space-y-2 font-bold"
        elItem.innerHTML = `
        <p><strong>ID:</strong>${item.id}</p>
        <p><strong>User ID:</strong>${item.userId}</p>
        <p><strong>Title:</strong>${item.title}</p>
        <p><strong>Body:</strong>${item.body}</p>
        <button onclick="hanleUserComments(${item.id})" class="btn">Comments</button>
        `
        elPostList.appendChild(elItem)
    })
}
// Post list end

// Comments list start
let elCommentsList = document.querySelector(".coments-list")
function hanleUserComments(id){
    elCommentsList.innerHTML = `
       <img class='mx-auto scale-[1.2] mt-[200px]' src="./images/loading.svg" alt="loading" width="100" />
    `
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.json()).then(data => {
        setTimeout(() => renderComments(data), 1000)
    })
}
function renderComments(arr){
    elCommentsList.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-xl text-center text-[#00A97F] space-y-2 font-bold"
        elItem.innerHTML = `
        <p><strong>ID:</strong>${item.id}</p>
        <p><strong>User name:</strong>${item.name}</p>
        <p><strong>Email:</strong>${item.email}</p>
        <p><strong>Body:</strong>${item.body}</p>
        `
        elCommentsList.appendChild(elItem)
    })
}
// Comments list end