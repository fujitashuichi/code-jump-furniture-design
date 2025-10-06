// key -> 商品名, value -> 画像のパス
const items = [
    {name: "item1", img: "/img/item1.jpg", price: 99999},
    {name: "item2", img: "/img/item2.jpg", price: 99999},
    {name: "item3", img: "/img/item3.jpg", price: 99999},
    {name: "item4", img: "/img/item4.jpg", price: 99999},
    {name: "item5", img: "/img/item5.jpg", price: 99999},
    {name: "item6", img: "/img/item6.jpg", price: 99999},
    {name: "item7", img: "/img/item7.jpg", price: 99999},
    {name: "item8", img: "/img/item8.jpg", price: 99999},
    {name: "item9", img: "/img/item9.jpg", price: 99999},
    {name: "item10", img: "/img/item10.jpg", price: 99999},
    {name: "item11", img: "/img/item11.jpg", price: 99999},
    {name: "item12", img: "/img/item12.jpg", price: 99999},
    {name: "item13", img: "/img/item13.jpg", price: 99999},
    {name: "item14", img: "/img/item14.jpg", price: 99999},
    {name: "item15", img: "/img/item15.jpg", price: 99999},
    {name: "item16", img: "/img/item16.jpg", price: 99999}
];


function insertItems() {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/index.html")) {
        const elements = createItemElements(0, 8);
        insertElements(elements);
    } else if (currentPath.includes("/pages/item")) {
        const fileName = currentPath.split("/").pop();
        const first = (fileName.match(/¥d+/) - 1) * 8;  // そのページにおける最初のitemのインデックスを算出した式
        const elements = createItemElements(first, 12);
        insertElements(elements);
    }
}


// first番目から num個のエレメントを生成し、リストで返す
function createItemElements(first, num) {
    let elements = [];
    const parser = new DOMParser();
    num += first;
    for (let i = first; i < num; i++) {
        const item = items[i];
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
