//Сущность товара, элемент корзины 

    class GoodsItem {
        constructor({ title = 'Нет данных', price }) {
            this.title = title;
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
            this.goods = [
            {title: "Мышка", price: 500},
            {title: "Монитор", price: 10500},
            {title: "Системный блок", price: 25000},
            {title: "Клавиатура", price: 1500},
        ];
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
    calculatetePrice () {
        let totalPrice = 0;
        this.goods.forEach((item) => {
           totalPrice += item.price; 
        })
        console.log(totalPrice + 'rre');
        return totalPrice;
    }
    // calculatetePrice() {
    //     const totalPrice = this.goods.reduce((acc, curr) => acc + curr.price , 0);
    //     console.log(totalPrice);
    //     return totalPrice;
        
    // }

}


class Basket {

    fetchBasket () {  // Данные текущей корзины , когторая хранится на сервере 

    }
    render() { // отрисовка корзины

    }

    addItem() { // Добавить что-то в корзину

    }

    removeItem() { // удалить товар из корзины

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

const list =  new GoodsList();
list.fetchData();
list.render();
list.calculatetePrice();


