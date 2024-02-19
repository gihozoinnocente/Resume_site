const blogForm = document.getElementById("blogForm");
const articles = document.querySelector(".articles");
const titleInput = blogForm["title"];
const authorInput = blogForm["author"];
const articleInput = blogForm["article"];
const img = document.querySelector("#myFileInput");
const button = document.getElementById("dropbtn");

var url;
document.querySelector("#myFileInput").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result)
        url = reader.result;
    });

    reader.readAsDataURL(this.files[0]);
});
const addArticle = (a) => {
    a.preventDefault();
    const prevBlog = localStorage.getItem("articles") ?
        Object.values(JSON.parse(localStorage.getItem("articles"))) : [];
    localStorage.setItem("articles", JSON.stringify([...[...prevBlog, { title: titleInput.value, author: authorInput.value, image: img.url, article: articleInput.value }]]))
};
button.addEventListener("click", (a) => { addArticle(a) })













