const goods = [
    { title: 'Мышка', price: 500 },
    { title: 'Ноутбук', price: 50000 },
    { title: 'Клавиатура', price: 5000 },
    { title: 'Монитор', price: 10000 },
];
// сократил функцию
const getGoodsItemLayout = (title, price) => 
    `
        <div class="item">
            <img src="http://placehold.it/150x150/" alt ="/">
            <h4 class="title_of_card">${title}</h4>
            <p class="description_of_card">${price}</p>
            <button class="card_button btn" type="button">Добавить</button>
        </div>
    `;
// .join метод помог убрать запятые
const render = (list) => {
    let goodsItems = (list.map(item => getGoodsItemLayout(item.title, item.price))).join('');
    document.querySelector('.goods').innerHTML = goodsItems;
};

render(goods);
