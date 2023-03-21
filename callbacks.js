/* console.log('1. The program starts');
setTimeout(() => {
  console.log('4. The timer is lapsed, this callback function is now called');
}, 2000); // 2000ms = 2 seconds
console.log('2. The timer has started, and the callback function registered to be called later');
console.log('3. The rest of the program below (immediate tasks) will keep running immediately');
*/

/*
Exercise 1
Declare a function printHello which prints a greeting message.
Use setTimeout to execute this function after a 3 seconds delay.

SOLUTION:
function printHello () {
    console.log('Hello');
};

setTimeout(printHello, 2000);

Exercise 2
To work on this exercise, it is important to think of functions as regular values (they can be passed around just like any other variable). Revisit the previous section if this wasn't clear.
Declare a function executeAfterDelay which calls the given function after the given delay in seconds:

const printHello = () => {
console.log('Hello!');
}

executeAfterDelay(5, printHello);

// After about 5 seconds, you should see the message being logged

Hello!

SOLUTION:

const printHello = () => {
console.log('Hello there!');
}

function executeAfterDelay (seconds, printHello) {
    return setTimeout(printHello, seconds*1000)
};

executeAfterDelay(5, printHello);

Challenge:
In this challenge you'll need to use the function setInterval. It works the same way as setTimeout, but rather than executing the given function once after a delay, it executes it repeatedly. For example, if we give 2000 for the number of milliseconds, the function will execute every 2 seconds:
setInterval(myFunction, 2000); // myFunction will execute every 2 seconds
In a new file counter.js:
Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
Declare a function called increment that:
    increments the value of counter by 1
    and prints it using console.log
Using setInterval, call this function every second so the counter is incremented and printed every second.
If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:
$ node counter.js
1
2
3
(...)
*/
