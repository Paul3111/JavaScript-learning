/* const my_array = ['Florin','Mihaela','Daniela','Bogdan'];
console.log(my_array.length);
console.log(my_array[1]);
const newArray = my_array.concat('Andrei');
console.log(newArray[4]);
console.log(newArray.slice(-1));
console.log(newArray[newArray.length - 1]);

const my_numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
my_numbers.forEach ((number) => {
    sum += number;
    console.log (`Sum is now: ${sum}`);
});
*/

/*
Challenge:

You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as 1274.
Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small program to do this.
To complete this exercise you will have to find out:
    how to add elements to an array with the .concat method
    how to get the length of an array
Questions
    Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.
    Now, make sure this function does not add the number if the array's length is already 5 or greater — it should just return the array untouched in that case.
Once your function is written, you should be able to type the following code and have the exact same output:

> addToBatch([1], 3); 
[ 1, 3 ]

> addToBatch([1, 2, 3], 4); 
[ 1, 2, 3, 4 ]

> addToBatch([], 8); 
[ 8 ]

> addToBatch([1, 2, 3, 4, 5, 6], 7); 
[ 1, 2, 3, 4, 5, 6 ]

> addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*/

/*
SOLUTION:
function addToBatch (array, number) {
    if (array.length < 5) {
        return newArray = array.concat(number);
    } else {
        return newArray = array;
    }
};

console.log(addToBatch([1,2,3,4,5], 6))

*/

