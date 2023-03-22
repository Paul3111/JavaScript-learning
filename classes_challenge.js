/*
Challenge
Implement the classes Candy and ShoppingBasket so you can require them into
node and get the following behaviour:

> const candy = new Candy('Mars', 4.99);

> candy.getName();
'Mars'
> candy.getPrice();
4.99

> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97
*/

// SOLUTION

class Candy {
    constructor(choc, price) {
        this.choc = choc;
        this.price = price;
    }

    getName() {
        return this.choc;
    }

    getPrice() {
        return this.price;
    }
}

let basket_sum = 0

class ShoppingBasket {
    items = []

    getTotalPrice() {
      this.items.forEach(item => {
        basket_sum += item.getPrice();
      });
      return basket_sum;
    }

    addItem(item) {
        this.items.push(item);
    }

    viewItems() {
        return this.items;
    }
}

candy1 = new Candy('Nutella', 1.5);
console.log(candy1.getName());
console.log(candy1.getPrice());

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); // returns zero

basket.addItem(candy1)
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Mars', 3.99));
console.log(basket.viewItems()); // returns list of all items in basket
console.log(basket.getTotalPrice());

module.exports = Candy;
module.exports = ShoppingBasket;