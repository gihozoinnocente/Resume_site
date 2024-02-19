const urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
console.log(id)

const blogsection = document.querySelector('.tech')
const readAppend = document.createElement('div')

async function renderArticles() {
    const response = await fetch(`https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/articles/${id}`)
    if (response) {

        const fetchedResponse = await response.json()
        const article = fetchedResponse.data
        
        blogsection.innerHTML += `
    <div class="tech">
        <img src="${article.image}" alt="" id="blogImage">
                    <div id="blog-content">
                        <h4 id="blog-title" class="blog-title">${article.title}</h4>
                        <h6>by Gihozo</h6>
                        <p> ${article.content}</p>
                        
                        
                    </div>
        </div>


        <form id="blog-comment" class="blog-comment" >
        <p class="commentTitle">Leave Your Comment</p>
        <input type="text" name="name" id ="commenter"class="blogInput" placeholder="Name">
        <input type="text" name="email" class="blogInput" placeholder="Email">
        <input type="id" name="id" style="display:none" value=${id} >
        <textarea name="text" id="blogText" class="blogText" cols="30" rows="10"
            placeholder="Leave Your Comment Here"></textarea>
        <button class="send-blog" id="sendblog" >SEND</button>
    </form> 

    <div id="message" class="message">
   
    </div>

  

        ` ;
        getComments()
    }


    let urlcomment = 'https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/comments/' + id
    console.log(urlcomment);
    let sendComment = document.getElementById("sendblog");


    sendComment.addEventListener("click", async function (e) {
        e.preventDefault();
        var commenter = document.getElementById("commenter");
        var message = document.getElementById("blogText")


        let urlcomment = 'https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/comments/' + id
        let check = await fetch(urlcomment, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain,*/*',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                commenter: commenter.value,
                comment: message.value,
            }),
        })


        if (check) {
            console.log(await check.json());
            alert("Comment created ");
           

        } else {
            alert("not created");
        }
    })

   
}

renderArticles()





const getComments = () => {
    const CommentContainer = document.getElementById("message");
    let response = fetch(
      `https://staging-ft-auth-validat-qg7m2y.herokuapp.com/api/v1/comments/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((comments) => {
        console.log(comments);
        const content = comments.data
        console.log(content)
        content.map((comment) => {
          

          let html1 = `
          
         
              <h4>${comment.commenter}/h4>
              <p class="text-message">${comment.comment}</p>
          
                     `;
  
          CommentContainer.innerHTML += html1;
        });
      })
      .catch((error) => console.log(error));
  };
  



