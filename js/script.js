// コンポーネントの挿入
fetch("./common/html/header.html")
    .then (response => response.text())
    .then (data => {
        try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(data, "text/html");
            document.getElementById("header").innerHTML = dom.body.innerHTML;

            const toggleBtn = document.querySelector(".toggle-btn");
            const mask = document.getElementById("mask");

            if (toggleBtn && mask) {
                toggleBtn.addEventListener("click", () => {
                    mask.classList.toggle("open");
                });
            }
        } catch (e) {
            console.error(e);
        };
    });
