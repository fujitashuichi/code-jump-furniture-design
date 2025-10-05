// コンポーネントの挿入
fetch("./common/html/header.html")
    .then (response => response.text())
    .then (data => {
        try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(data, "text/html");
            document.getElementById("header").innerHTML = dom;
        } catch {(e) => {
            console.error(e);
        }};
    });


document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById(".toggle-btn");
    console.log(toggleBtn);
    const mask = document.getElementById("mask");
    toggleBtn.addEventListener("click", () => {
        mask.classList.toggle("open");
    });
});
