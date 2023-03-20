// Challenge
// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

//    Return "Fizz" if this number is divisible by 3.
//    Return "Buzz" if this number is divisible by 5.
//    Return "FizzBuzz" if this number is divisible by both 5 and 3.
//    Otherwise, Return the number itself.

//Here's an acceptance criteria of how the function should behave:

// > fizzBuzz(3); 
// 'Fizz'

// > fizzBuzz(5);
// 'Buzz'

// > fizzBuzz(8);

// 8

// > fizzBuzz(15);
// 'FizzBuzz'

// > fizzBuzz(18);
// 'Fizz'

// > fizzBuzz(20);
// 'Buzz'

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    } else if (number % 3 === 0) {
        return 'Fizz'
    } else if (number % 5 === 0) {
        return 'Buzz'
    } else {
        return number
    }
};

//console.log(fizzbuzz(3))

let i = 1
while (i <= 20) {
    console.log(fizzbuzz(i))
    i++;
};