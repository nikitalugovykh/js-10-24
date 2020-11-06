const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const request = (url, method = 'GET') => {
return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, `${API}/${url}`);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else if (xhr.status === 404) {
                reject('Not Found error');
            } else {
                reject('Unknown error');
            }
        }
    }

    xhr.send();
    });
};

//Сущность товара, элемент корзины 

class GoodsItem {
    constructor({product_name = 'Нет данных', price}) {
        this.title = product_name;
        this.price = price;
    }
    render() {
        return `
            <div class = "item">
            <h4> ${this.title}</h4>
            <p> ${this.price} </p>
            <button>Купить</button>
            </div>
            `;
    }
}

// Класс списка товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchData() {
        return new Promise ((resolve, reject) => { 
            request('catalogData.json')
                .then((goodsFromServer) => {
                    this.goods = goodsFromServer;
                    resolve();    
                })
                .catch(()=> {
                    console.error(err);
                });          
            })
    }

    render() {
        let goodsItems = this.goods.map(item => {
            const goodsitem = new GoodsItem(item);
            return goodsitem.render();
        });
        document.querySelector('.goods').innerHTML = goodsItems.join('');
    }

    calculatedQuantity() {

    }

    calculatetePrice() {
        const totalPrice = this.goods.reduce((acc, curr) => acc + curr.price , 0);
        console.log(totalPrice); 
        return totalPrice;

    }

}


class Basket {

    constructor() {
        this.basketGoods = [];
        this.totalPrice = 0;
        this.countGood = 0;
         
    }

    fetchBasket() {
            return new Promise ((resolve, reject) => { 
                request('getBasket.json')
                    .then((basketGoodsFromServer) => {
                        this.basketGoods = basketGoodsFromServer.contents;
                        this.totalPrice = basketGoodsFromServer.contents;
                        this.countGoods = basketGoodsFromServer.contents;
                        resolve();    
                    })
                    .catch(()=> {
                        console.error(err);
                    });          
                })
    }
    addItem() { 
        return new Promise ((resolve, reject) => { 
            request('addToBasket.json', 'GET')
                .then((data) => {
                    if(data.result === 1 ) {
                        this.basketGoods.push(item)
                    } else {
                        console.error('addItem result != 1')
                    }
                    resolve();    
                })
                .catch((err)=> {
                    console.error(err);
                });          
            })

    }

    removeItem(id) { 
        return new Promise ((resolve, reject) => { 
            request('deleteFromBasket.json', 'GET')
                .then((data) => {
                    if(data.result === 1 ) {
                       this.basketGoods = this.basketGoods.filter((product) => product.id_product !== id )
                    } else {
                        console.error('addItem result != 1')
                    }
                    resolve();    
                })
                .catch(()=> {
                    console.error(err);
                });          
            })

    }
    render() { // отрисовка корзины

    }
    addInFavorite() { // Добавить в избранное

    }

    changeQuentity() { // изменить количество товаров в корзине 

    }
    calculatetePrice() { // считается итоговая стоимость всей корзины

    }

    availabilityProduct() { // наличие в магазинах 

    }
    quentityProduct() { // количество товаров в корзине

    }
    newOffers() { // новые предложения, дополнительные аксессуары 

    }
    clearBusket() { // очистить корзину

    }
    applyCoupon() { // применить купон

    }
    calculatedDiscount() { // считается скидка по купону

    }

}

class BasketItem {
    render() {

    }
    removeItem() { // удалить товар из корзины

    }
}

const list = new GoodsList();
list.fetchData()
      .then(()=> list.render());
list.calculatetePrice();

const basket = new Basket();
basket.fetchBasket()
    .then(()=> {
        basket.addItem({id_product: 900, title: 'что-то1', price: 2000});
        basket.addItem({id_product: 800, title: 'что-то2', price: 500});
        basket.addItem({id_product: 700, title: 'что-то3', price: 1500});
        basket.removeItem(123);
        basket.removeItem(800); 

    });

    