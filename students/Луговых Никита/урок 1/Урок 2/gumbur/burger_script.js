
class Hamburger {
    //начинка
    constructor(name, price, cal) {     
        this.name = name;
        this.price = price;
        this.cal = cal;
     }
}

const item1 = new Hamburger('big', 100, 40);
const item2 = new Hamburger('small', 50, 20);
const item3 = new Hamburger('cheese', 10, 20);
const item4 = new Hamburger('salad', 20, 5);
const item5 = new Hamburger('potato', 15, 10);
const item6 = new Hamburger('seasoning', 15, 0);
const item7 = new Hamburger('mayonneise', 20, 5);

var burgerStack = [item1,item2,item3,item4,item5,item6,item7];

// 
// name, price,cal
var price = document.querySelector('.price');
var calories = document.querySelector('.calories');
var button = document.querySelectorAll('button')


var burger = {};  // size, topping, addition 



class BurgerResualt {
    constructor (burger) {
        let calories = 0;
        let price = 0;
        for (let item of burgerStack) {
            if(item.name == burger.size || item.name == burger.topping || item.name == burger.addition) {
                calories += item.cal;
                price += item.price; 
            }
            this.calories = calories;
            this.price = price;
            
            console.log(price);
        }
        
    }
}

//события на html, то что я жму пишется в объект данных, 3 категории сайз начинка и добавка, данные объекта
// отправляюься  в функицю конструктор BurgerResualt где ведется счет цены и калорий, через сравнение 2х 
// объектов  
for(let click of button) {
    click.onclick = function(event) {
        var clickId = event.target.id;
        if (clickId === 'small' || clickId === 'big') {
            var size = clickId;
            burger.size = size;
            // console.log(size);
        } 
        else if (clickId == 'potato' || clickId == 'salad' || clickId == 'cheese') {
            var topping = clickId;
            burger.topping = topping;
            // console.log(topping);
        } else {
            var addition = clickId;
            burger.addition = addition;
            // console.log(addition);
        }
        let burgerResult = new BurgerResualt(burger);
        calories.innerText = 'Количество калорий: ' + burgerResult.calories + ' Ккал';
        price.innerText = 'Итоговая цена: ' + burgerResult.price + ' руб';
        
    }
}




