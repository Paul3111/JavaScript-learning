/*
Exercise
An object is composed of key-values pairs. Those values can be any primitive values such as strings or numbers, as in the example above,
or they can be more complex things, such as other objects, arrays, or even functions:
    Print the value of the city attribute ('London').
    Print the value of the second hobbies value ('tennis').

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

SOLUTION:
// console.log(person.hobbies);

console.log(person.address.city);
console.log(person.hobbies[1]);
*/

/*
Challenge:
    Declare an object cohort that has the following properties:
        a string name (e.g 'May2022')
        a number id (e.g 1234)
        an array of student names
    Declare a function that accepts that object as argument and print a message with the following structure:
<COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort
*/

/*
SOLUTION:
*/

const cohort = {
    cohort_name: 'May2022',
    id: 5,
    students: ['Paul','Fiona','Valeria','Josh']
};

function print_cohort(cohort) {
    return `< ${ cohort.id} > - < ${cohort.cohort_name} > - < ${cohort.students.length} > students in this cohort`;
};

console.log(print_cohort(cohort))