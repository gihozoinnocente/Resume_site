const isLogedIn = JSON.parse(localStorage.getItem("isLogedIn")) === null ? localStorage.setItem("isLogedIn", JSON.stringify(false)) : JSON.parse(localStorage.getItem("isLogedIn"))
if (!isLogedIn) {
    location.assign("/Pages/login.html")
}