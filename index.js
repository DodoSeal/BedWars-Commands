const searchBar = document.getElementById("searchInput")
const widgets = document.getElementsByClassName("cmdWidget")

searchBar.addEventListener('keyup', (e) => {
    Array.from(widgets).forEach(element => {
        if (!element.textContent.includes(e.target.value) && e.target.value !== "") {
            element.classList.add("disabledWidget")
        } else {
            element.classList.remove("disabledWidget")
        }
    })
})