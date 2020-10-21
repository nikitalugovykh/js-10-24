const goods = [
    { src: 'img/mouse.jpg', title: 'Мышка', price: 500 },
    { src: 'img/notebook.jpg', title: 'Ноутбук', price: 50000 },
    { src: 'img/keyboard.jpg', title: 'Клавиатура', price: 5000 },
    { src: 'img/monitor.jpg', title: 'Монитор', price: 10000 },
];

const getGoodsItemLayout = (src = 'img/new.jpg', title = 'Скоро будет', price = 0) => {
    return `
        <div class="item card p-4" style="width: 16rem;">
        <img src="${src}" class="card-img-top" alt="item">
            <h4 class="card-title">${title}</h4>
            <p class="card-text">${price}</p>
            <a href="#" class="btn btn-warning">Купить</a>
        </div>
    `;
}

const render = (list = 0) => {
    let goodsItems = list.map(item => getGoodsItemLayout(item.src, item.title, item.price)).join(' ');
    document.querySelector('.goods').innerHTML = goodsItems;
};

render(goods);
