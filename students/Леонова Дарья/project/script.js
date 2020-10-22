var goods = [
    { name: 'bRANDED sHOE', price: 300, img: 'img/shoes.jpg' },
    { name: 'bRANDED tEES', price: 300, img: 'img/tshort.jpg' },
    { name: 'bRANDED purse', price: 300, img: 'img/purse.jpg' },
    { name: 'bRANDED tsort', price: 300, img: 'img/tshort1.png' },
    { name: 'EMS Women bAG', price: 300, img: 'img/bag.jpg' },
    { name: 'bRANDED CARGOS', price: 300, img: 'img/short.png' }
];


const getGoodsItemLayout = (title, price, img) => {
    return `
        <div class="item">
        <img src=${img}>
            <h4 class="title">${title}</h4>
            <p>$${price}</p>
            <button class="buy"> Buy </button>
        </div>
    `;
}


const render = (list = goods) => {
    let goodsItems = list.map(item => getGoodsItemLayout(item.name, item.price, item.img));
    document.querySelector('.products').innerHTML = goodsItems.join(''); //для того чтобы не выводилась запятая 
};

render();