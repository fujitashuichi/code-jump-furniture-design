// key -> 商品名, value -> 画像のパス
const items = {
    item1: "/img/item1.jpg",
    item2: "/img/item2.jpg",
    item3: "/img/item3.jpg",
    item4: "/img/item4.jpg",
    item5: "/img/item5.jpg",
    item6: "/img/item6.jpg",
    item7: "/img/item8.jpg",
    item9: "/img/item9.jpg",
    item10: "/img/item10.jpg",
    item11: "/img/item11.jpg",
    item12: "/img/item12.jpg",
    item13: "/img/item13.jpg",
    item14: "/img/item14.jpg",
    item15: "/img/item15.jpg",
    item16: "/img/item16.jpg"
};


let elements = [];
const parser = new DOMParser();
Object.keys(items).forEach(key => {
    const text =
    `
        <li>
            <a href="/pages/${key}.html">
                <img src="${items[key]}" alt="${key}" />
            </a>
        </li>
    `

    const element = parser.parseFromString(text, "text/html");
    elements.push(element);
});


const list = document.querySelector(".product-list");
elements.forEach(element => {
    list.insertAdjacentHTML("beforeend", element.body.innerHTML);
});
