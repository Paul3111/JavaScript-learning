/*
Exercise 1 - phone numbers

Your friend now wants to launch a special promotion. They give you a long list of phone numbers so you can create a small program to text everyone.
You notice some lines in the file are not phone numbers, but some corrupted data:

1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)

However, you realise that most phone numbers on the list are no longer than 10 digits. Maybe you could just implement a JavaScript function to do the filtering for you!
To complete this exercise you will have to use Array's filter method to filter long numbers using this function.
Questions
    Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
    Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less.
    It should make use of the function checkLength written previously.
Once your function is written, you should be able to type the following code and have the exact same output:

> const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

> filterLongNumbers(numbers);
[ '1763687364', '4763687363', '7867867862' ]

> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]

*/

/* 
SOLUTION

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

const checkLength = (string) => {
    return (string.length <= 10) ? true : false ;
};

//const fil = numbers.filter(checkLength); // also works
//console.log(fil)

function filterLongNumbers(PhoneNoArray) {
    return filterredList = numbers.filter(checkLength);
};

console.log(filterLongNumbers(numbers));

*/

/*
Exercise 2 - personalised messages

Your friend now would you like to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:

> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

To complete this exercise you'll have to:
    create a function that takes a single name and generate the correct message for it.
    use Array's map method to generate the list of personalised messages using this function.
Questions
    Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name.
    For example, when given the array above, the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!',
    the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.
Once your function is written, you should be able to type the following code and have the exact same output:

> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

> generateMessages(names);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 50% off our best candies for you today!',
  'Hi Josh! 50% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 50% off our best candies for you today!'
]

*/

/*

SOLUTION:

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessage = (name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
};

const message = names.map(generateMessage);

console.log(message);

*/

/*
Challenge

Let's go back to our candy promotion texts. Your friend now wants to have a specific discount percentage for each customer. After processing the list you're given, you end up with the following array:

// An array of objects!
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

To complete this exercise, you'll have to:
    use Array's map method again.
    access the properties of an object as seen previously.
Questions
    Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.
Once your function is written, you should be able to type the following code and have the exact same output:

> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

> generateMessages(namesAndDiscounts);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 40% off our best candies for you today!',
  'Hi Josh! 30% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 60% off our best candies for you today!'
]
*/

// SOLUTION:

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

const generateMessages = (array) => {
    return `Hi ${array.name}! ${array.discount} off our best candies for you today!`;
};

const messages = namesAndDiscounts.map(generateMessages);

console.log(messages);