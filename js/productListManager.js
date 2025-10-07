import { products } from "./productData.js";


function insertItems() {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/index.html")) {
        const elements = createItemElements(0, 8);
        insertElements(elements);
    } else if (currentPath.includes("/pages/products")) {
        return; // 一時的に機能停止
        const fileName = currentPath.split("/").pop();
        const first = (fileName.match(/¥d+/) - 1) * 8;  // そのページにおける最初のitemのインデックスを算出した式
        console.log(first);
        const elements = createItemElements(first, 12);
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
                    <p class="item-price">${item.price}</p>
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
    elements.forEach(element => {
        list.insertAdjacentHTML("beforeend", element.body.innerHTML);
    });
}


export { insertItems };
