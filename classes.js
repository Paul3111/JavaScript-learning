/* Exercise 1
We would like to implement a class to represent a user account. Here is how we should be able to use this class:

> const user = new User('Uma');

> user.getName(); 
'Uma'

> user.getIntroduction();
'Hi, my name is Uma'

To complete this exercise, you will have to:
    Learn how to declare a class and its methods. Having a look at the Classes MDN documentation is a good start.
    Initialise an attribute within the constructor special method
Implement the User class in a file user.js so it behaves exactly like in the example code above.
Require the file into the node REPL to verify the class is working.
Reveal suggested solution
*/

//*/
// SOLUTION

class User {
    constructor(full_name) {
        this.full_name = full_name;
    }

    getName() {
        return this.full_name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.full_name}`;
    }
}

module.exports = User;

// user1 = new User('Paul')
// console.log(user1.getName())
// console.log(user1.getIntroduction())

//*/

/*
Exercise 2

Given the following array of User instances (the class from the previous exercise):

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

We'd now like to have a class UserBase that behaves like this:

> const userBase = new UserBase(users);

> userBase.count();
3

> userBase.getNames();
[ 'Uma', 'Josh', 'Ollie' ]

> userBase.getIntroductions();
[
  'Hi, my name is Uma',
  'Hi, my name is Josh',
  'Hi, my name is Ollie'
]

To complete this exercise, you will have to:
    declare a new class and its methods.
    use what you've previous learned on working with arrays, like the map method.
    call methods from the User class.
Implement the UserBase class in a file userBase.js so it behaves exactly like in the example code above.
Require the two classes into the node REPL to verify it's working.
*/

// SOLUTION is in file userBase.js

/*
Challenge
Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:

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

