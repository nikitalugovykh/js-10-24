const goods = [
    { title: 'Мышка', price: 500 },
    { title: 'Ноутбук', price: 50000 },
    { title: 'Клавиатура', price: 5000 },
    { title: 'Монитор', price: 10000 },
];

const getGoodsItemLayout = (title, price) => {
    return `
        <div class="item">
            <h4>${title}</h4>
            <p>${price}</p>
        </div>
    `;
}

const render = (list) => {
        document.querySelector('.goods').innerHTML = list.map(item => getGoodsItemLayout(item.title, item.price)).join ('');
};

render(goods);