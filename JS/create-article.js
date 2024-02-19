let image = document.getElementById("photo").addEventListener("change", function (e){console.log(e.target.files[0])})


//initialising the local storage
const createArticleForm = document.querySelector(".create-article-form");
createArticleForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
   

    let images = e.target.elements.photo.files[0];
    const formData = new FormData();
    formData.append('image', images);
    formData.append("title", title);
    formData.append("content", content);
    


    

    
    let existingArticle = fetch('https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles', {
        method :"POST",
        mode: 'cors',
        cache: 'reload',
        headers: {
          'Accept': 'application/json',
         
          'Authorization' : window.localStorage.getItem ("accessToken"),
        },
        
        body: formData,
        })

            

        .then((res) => res.json())
        .then((data) => {
        if (data.status === 200) {
            alert("Article created successfully");
            window.location.href = "/Pages/article.html";
        } else {
            alert("not created");
        }
    
        })
    
     
})


