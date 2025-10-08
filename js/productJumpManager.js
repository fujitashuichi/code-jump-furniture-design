const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("click", (event) => {
        const item_id = event.target.id;
        jumpToItemPage(item_id);
    });
});


// itemのページへ遷移する
function jumpToItemPage(item_id) {
    window.location.href = `/pages/item.html?id=${item_id}`
}


export { jumpToItemPage };
