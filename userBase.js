const User = require ('./classes');
// user1 = new User('Paul')
// console.log(user1.getName())
// console.log(user1.getIntroduction())

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

// console.log(users[0]);

class UserBase {
constructor(user_list) {
    this.user_list = user_list;
}

    count() {
        return this.user_list.length
    }

    getNames() { //using .map below
        const names_list = []
        for (let entry in this.user_list) {
            names_list.push(this.user_list[entry].getName());
        };
        return names_list;
    }

    getIntroductions() {
        return this.user_list.map(x => x.getIntroduction());
    }
};

const userBase1 = new UserBase(users);
console.log(userBase1.getNames());
console.log(userBase1.count());
console.log(userBase1.getIntroductions());
