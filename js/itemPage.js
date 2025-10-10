import { products } from "./productData.js";

// urlパラメータから商品のインデックスを取得 （productData内でのインデックスに対応）
const itemId = location.search.split("?id=").pop().match(/\d+/);

// データリストから目的の商品を取得
const item = products[itemId];


document.title = item.name;


const strings = item.texts.map(string =>
    `<p>${string}</p>`
);

let details = [];
for(const key in item.details) {
    details.push(`
            <dt>${key}</dt>
            <dd>${item.details[key]}</dd>
        `);
}

const text = `
    <h2 class="item-title">${item.name}</h2>
    <div class="img-wrapper">
        <img src="${item.img}"></img>
    </div>
    <div class="text-wrapper">
        ${strings.join("\n")}
        <dl>
            ${details.join("\n")}
        </dl>
    </div>
`

const parser = new DOMParser();
const element = parser.parseFromString(text, "text/html");

const content = document.getElementById("content");
content.insertAdjacentHTML("beforeend", element.body.innerHTML);
