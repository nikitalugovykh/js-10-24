// Old 
/*
function MenuItem (color = 'Green', name = 'Home') {
    this.color = color;
    this.name = name;
    this.makeRed = function() {
        this.color = 'Red';
    }
}

MenuItem.prototype.makeGreen = function () {
    this.color = 'Green';
}

function HeaderMenuItem () {
    MenuItem.call(this, 'Brown', 'About');
}

HeaderMenuItem.prototype = Object.create(MenuItem.prototype);

HeaderMenuItem.prototype.constructor = HeaderMenuItem;

const menuItem1 = new MenuItem();
const menuItem2 = new MenuItem('Blue', 'Catalog');
const headerMenuItem1 = new HeaderMenuItem();
*/

// ES2015 classes

class MenuItem {
    constructor (color = 'Green', name = 'Home') {
        this.name = name;
        this.color = color;
    }

    makeRed () {
        this.color = 'Red';
    }
}

class HeaderMenuItem extends MenuItem {
    constructor (catalog = '/catalog', color, name) {
        super(color, name);
        this.link = catalog;
    }

    makeBrown() {
        this.color = 'Brown';
    }

    makeRed () {
        this.name = 'Red';
    }
}

const menuItem1 = new MenuItem();
const menuItem2 = new MenuItem('Blue', 'News');
const headerMenuItem1 = new HeaderMenuItem('/home', 'Orange', 'Home');
const headerMenuItem2 = new HeaderMenuItem();


class Car {
    #fuel;

    constructor () {
        this.#fuel = 100;
    }

    drive() {
        if (this.#fuel < 10) {
            return 'Error';
        }

        this.#fuel -= 10;
    }

    fillUp() {
        this.#fuel = 100;
    }
}

const car = new Car();

const car2 = {
    _fuel: 100,
    get fuel() {
        console.log('getter fuel');
        if (this._fuel < 0) {
            return 0;
        }
        if (this._fuel > 100) {
            return 100;
        }
        return this._fuel;
    },
    set fuel(value) {
        console.log('setter fuel');

        this._fuel = value;
        if (value < 100 && value > 80) {
            this.status = 'Good';
        } else if (value < 80 && value > 40) {
            this.status = 'OK';
        } else {
            this.status = 'Bad';
            // this._fuel = value;
        }
    },
};

