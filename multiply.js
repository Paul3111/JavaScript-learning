// Challenge

// Define a function add (in a file add.js) which takes two arguments and return their sum.
// Define a function multiply (in a file multiply.js) which takes two arguments and return their product.
// From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4). You should get the correct result (16).

const nummult = (num1, num2) => {
    return num1 * num2;
};

module.exports = nummult;

// in node > multiplication(2,addition(4,4))
// result is 16
