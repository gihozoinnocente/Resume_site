var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");

btn.onclick = function () {
count++;
disp.innerHTML = count;
}

const blogForm = document.getElementById("blog-comment");
blogForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the values from the form
    const name = e.target.elements.name.value
    const message = e.target.elements.text.value
    const email = e.target.elements.email.value
    
    const messages = {
        name: name,
        email: email,
        message: message,
    }

     // Let first get the existing comment
     const blogmessage = JSON.parse(localStorage.getItem("blogmessage")) === null ? [] : JSON.parse(localStorage.getItem("blogmessage"));
     blogmessage.push(messages)

    localStorage.setItem("blogmessage", JSON.stringify(blogmessage))
    window.alert("Thank you for your comment")

    e.target.elements.name.value = ''
    e.target.elements.text.value = ''
    e.target.elements.email.value = ''
})


const blogContainer = document.querySelector("#comment-container");
const blogmessage = JSON.parse(localStorage.getItem("blogmessage"));



function view(info,id)
{
    console.log(id);
    let div=document.createElement("blog");
    div.setAttribute("class","blog");
    div.innerHTML=`
    <div id="message" class="message">
    <h4>${info.name}</h4>
    <p class="text-message">${info.message}</p>
</div>
`;
blogContainer.appendChild(div);
}

blogmessage.forEach((Element,id)=> {
    view(Element,id);
    console.log(id)
})