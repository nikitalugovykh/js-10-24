const goods = [
    {title: "Мышка", price: 500 + " Рублей"},
    {title: "Монитор", price: 10500 + " Рублей"},
    {title: "Системный блок", price: 25000 + " Рублей"},
    {title: "Клавиатура", price: 1500 + " Рублей"},
  

];
 
const getGoodsItemsLayout = (title, price) => `
    <div class = "item">
    <h4> ${title}</h4>
    <p> ${price} </p>
    <button>Купить</button>
    </div>
    `;


const render = (list = []) => {
    let goodsItems = list.map(item => getGoodsItemsLayout(item.title, item.price));
    document.querySelector('.goods').innerHTML = goodsItems.join('');
}


render(goods);
