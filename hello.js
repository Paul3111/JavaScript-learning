const sayHello = () => {
    return 'Hello'
};

const goodbye = () => {
    return 'Bye bye'
};

const greeting = (name) => {
    console.log(`Hello ${name}`); // you have to use backticks for interpolation to work ` and not '
};

module.exports = goodbye;
module.exports = sayHello;

// in terminal
// node
// const firstMessage = require('./hello');
// firstMessage() # => will return 'Hello'
// apparently only the last exported function is made available when you 'require' the file

// console.log(sayHello()) // if you don't put the () it just returns the Function Object, not the content

console.log(greeting('Paul'))