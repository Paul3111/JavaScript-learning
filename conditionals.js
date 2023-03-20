//Exercise
//To complete the following, you will have to:
//   use if, else if and else to write conditionals.
//   use the strict equality operator === to compare values.

//    Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:

// > getNumberSign(3);
// 'positive'

// > getNumberSign(0);
// 'zero'

// > getNumberSign(-5);
// 'negative'

function getNumberSign(number) {
    if (number === 0) {
        return 'zero'
    } else if (number < 0) {
        return 'negative'
    } else {
        return 'positive'
    }
};

console.log(getNumberSign(0))
console.log(getNumberSign(2))
console.log(getNumberSign(-7))
