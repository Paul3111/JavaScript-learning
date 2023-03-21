/* for loops

for (let i = 0 ; i <= 10 ; i ++) {
    console.log(i);
};

or while loops

let i = 0

while (i <= 10) {
    console.log(i);
    i += 1;
};

*/

// Exercise:

// Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.
// You should get the following output:

// 1 is odd
// 2 is even
// 3 is odd
// (...)

/*
for (let i = 1 ; i <= 20 ; i ++) {
    if (i % 2 === 0) {
        console.log (i + ' is even');
    } else {
        console.log (i + ' is odd');
    }
};
*/

/* Challenge:
This challenge builds on the previous one, where you defined a fizzBuzz function.
Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers from 1 to the given one, 
call the fizzBuzz function for the current number and print the result.
You should get the following output: 

const fizzbuzzUntil = require('./fizzbuzzUntil');

fizzbuzzUntil(10);

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz */



let r = 1
function fizzbuzzUntil(number_to_loop_to) {
    while (r <= number_to_loop_to) {
        if (r % 3 === 0 && r % 5 === 0) {
            console.log('FizzBuzz')
        } else if (r % 3 === 0) {
            console.log ('Fizz')
        } else if (r % 5 === 0) {
            console.log ('Buzz')
        } else {
            console.log (r)
        };
        r += 1;
    }
};

fizzbuzzUntil(22)

module.exports = fizzbuzzUntil;