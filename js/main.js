import { insertItems } from "./productListManager.js";

// コンポーネントの挿入 //

// header
fetch("/common/html/header.html")
    .then (response => response.text())
    .then (data => {
        try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(data, "text/html");
            document.getElementById("header").innerHTML = dom.body.innerHTML;

            // トグルボタンの処理
            const toggleBtn = document.querySelector(".toggle-btn");
            const mask = document.getElementById("mask");
            const nav = document.getElementById("nav");

            toggleBtn.addEventListener("click", () => {
                toggleBtn.classList.toggle("open");
                mask.classList.toggle("open");
                nav.classList.toggle("open");
            });
        } catch (e) {
            console.error(e);
        };
    });

// product-list
if (document.querySelector(".product-list")) {
    insertItems();
}

// footer
fetch("/common/html/footer.html")
    .then(response => response.text())
    .then(data => {
        try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(data, "text/html");
            document.getElementById("footer").innerHTML = dom.body.innerHTML;
        } catch (e) {
            console.error(e);
        }
    });
