import { products } from "./productData.js";


function insertItems() {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/index.html")) {
        const elements = createItemElements(0, 8);
        insertElements(elements);
    } else if (currentPath.includes("/pages/products")) {
        const first = (document.title.match(/\d+/) - 1) * 12;
        const num = Math.min(products.length - first, 12);  // 最後のページで12個表示できないときのため
        const elements = createItemElements(first, num);
        insertElements(elements);
    }
}


// first番目以降のnum個のエレメントを生成し、リストで返す
function createItemElements(first, num) {
    let elements = [];
    const parser = new DOMParser();
    num += first;
    for (let i = first; i < num; i++) {
        const item = products[i];
        const text = `
            <li>
                <a href="/pages/${item.name}.html">
                    <img src="${item.img}" alt="${item.name}" />
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">¥${item.price} +tax</p>
                </a>
            </li>
        `

        // エレメントをDOMツリー情報に変換
        const element = parser.parseFromString(text, "text/html");

        elements.push(element);
    };

    return elements;
}


function insertElements(elements) {
    const list = document.querySelector(".product-list");
    list.innerHTML = "<!-- ↓inserted by JavaScript -->";
    elements.forEach(element => {
        list.insertAdjacentHTML("beforeend", element.body.innerHTML);
    });
}


export { insertItems };
