const logout = () => {
    localStorage.setItem("isLogedIn", JSON.stringify(false))
    location.assign("/Pages/login.html")
}