import { products } from "./productData.js";
import { insertItems } from "./productListManager.js";

const lastPageNum = Math.ceil(products.length / 12);  // 最後尾のページ番号を算出


// ↓ファイル読み込み時の処理 //

insertListChildren();

document.querySelectorAll(".nav-link-btn").forEach(btn => {
    btn.addEventListener("click", (event) => onClickPageLink(event));
});

// ↑ファイル読み込み時の処理 //


// ページリンクの数字部分を挿入
function insertListChildren() {
    const parent = document.getElementById("nav-link-num");
    const children = createListChildren();

    parent.innerHTML = "<!-- ↓inserted by JavaScript -->";
    children.forEach(child => {
        parent.insertAdjacentHTML("beforeend", child.body.innerHTML);
    });
}


// ページリンクの数字部分のエレメントをリストで返す
function createListChildren() {
    const currentPageNum = Number(document.title.match(/\d+/));

    let btnIds = [];
    switch (currentPageNum) {
        case 1:
            btnIds = [1, 2, 3];
            break;
        case lastPageNum:
            btnIds = [lastPageNum - 2, lastPageNum - 1, lastPageNum];
            break;
        default:
            btnIds = [currentPageNum - 1, currentPageNum, currentPageNum + 1];
    }

    btnIds = btnIds.filter(num => num > 0 && num <= lastPageNum);

    let elements = [];
    btnIds.forEach(id => {
        const text = `
            <li>
                <button id="${id}" class="nav-link-btn">${id}</button>
            </li>
        `

        const parser = new DOMParser();
        const element = parser.parseFromString(text, "text/html");
        elements.push(element);
    });

    return elements;
}


// ページリンクが押された時の処理
function onClickPageLink(event) {
    const currentPageTitle = document.title;
    let newPageTitle = "";

    if (event.target.id === "first") {
        newPageTitle = "products1";
    } else if (event.target.id === "end") {
        newPageTitle = `products${lastPageNum}`;
    } else {
        newPageTitle = `products${event.target.id}`;
    }

    if (currentPageTitle !== newPageTitle) {
        document.title = newPageTitle;
    }

    insertListChildren();
    insertItems();

    // 一部の要素を書き換えているため、イベントリスナーを設定し直す
    document.querySelectorAll(".nav-link-btn").forEach(btn => {
        btn.removeEventListener("click", onClickPageLink);
        btn.addEventListener("click", (event) => onClickPageLink(event));
    });
}
