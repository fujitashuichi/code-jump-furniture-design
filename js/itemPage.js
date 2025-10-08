import { products } from "./productData.js";

// urlパラメータから商品のインデックスを取得 （productData内でのインデックスに対応）
const itemId = location.search.split("?id=").pop().match(/\d+/);

// データリストから目的の商品を取得
const item = products[itemId];


document.title = item.name;

const text =　`
    <div class="img-wrapper">
        <img src="${item.img}"></img>
    </div>
`
const parser = new DOMParser();
const element = parser.parseFromString(text, "text/html");

const content = document.getElementById("content");
content.insertAdjacentHTML("beforeend", element.body.innerHTML);
