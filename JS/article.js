const blogContainer = document.querySelector("#blog-container");

async function view() {
    const getArticles = await get('/articles/');
    console.log(getArticles)
    const articles = getArticles.data;
    articles.map((currElem) =>
        blogContainer.innerHTML += `
     <div class="blog">
     <img src="${currElem.image}" alt="" id="blogImage">
            <div id="blog-content" class="blogBody">
                <h4 id="blog-title" class="blog-title">${currElem.title}</h4>
                <h6>by Gihozo</h6>
                <p id="#blog-content" class= "#blog-content" ${currElem.content}</p>
                <p class="likeButton" id="likeButton"><i class="fas fa-thumbs-up"></i></p>
                <button id="send"><a href="/Pages/blog2.html?id=${currElem._id}">Read More</a></button>
            </div>
     </div>
` ,
    );
}
view()



