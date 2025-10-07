const btns = document.querySelectorAll(".nav-link-btn");
btns.forEach(btn => {
    btn.addEventListener("click", (event) => reloadPage(event));
});


function reloadPage(event) {
    const currentPageTitle = document.title;

    if (event.target.id === "first") {
        const newPageTitle = "products1";
    } else if (event.target.id === "end") {
        console.log("e");
    }
}
