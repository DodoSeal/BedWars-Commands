const searchBar = document.getElementById("searchInput")
const widgets = document.getElementsByClassName("cmdWidget")

searchBar.addEventListener('keyup', (e) => {
    Array.from(widgets).forEach(element => {
        const search = e.target.value

        if (!element.textContent.includes(search.toLowerCase()) && e.target.value !== "") {
            element.classList.add("disabledWidget")
        } else {
            element.classList.remove("disabledWidget")
        }
    })
})