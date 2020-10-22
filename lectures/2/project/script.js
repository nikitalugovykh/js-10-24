class GoodsItem {
    constructor({ title = 'Нет данных', price }) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
            <div class="item">
                <h4>${this.title}</h4>
                <p>${this.price}</p>
            </div>
        `;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchData() {
        this.goods = [
            { title: 'Мышка', price: 500 },
            { title: 'Ноутбук', price: 50000 },
            { title: 'Клавиатура', price: 5000 },
            { title: 'Монитор', price: 10000 },
        ];
    }

    render() {
        let goodsItems = this.goods.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods').innerHTML = goodsItems.join('');
    }

    calculateQuantity() {
        
    }
}

const list = new GoodsList();
list.fetchData();
list.render();
