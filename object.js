
let likesJs = "likes";

let userInfo = {
  name: "Vasya",
  age: 30,
  [likesJs]: true,
  address: {
    city: "Moscow",
    // street: "Freedom"
  }
}
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo[likesJs]);
// console.log(userInfo.address.city);

let key = "name";
// console.log(userInfo[key]);

function makeUserInfo(name, age) {
  return {
    name,
    age,
  };
}

let user = makeUserInfo("Вася", 40);
// console.log(user);

userInfo.pet = "dog";

delete userInfo.pet;

userInfo.name = "Ann";

let secondUser = userInfo;

secondUser.name = "Mary";
// console.log(userInfo);
// console.log(secondUser);

//Дублирование объектов
let thirdUser = Object.assign({}, userInfo);
// console.log(thirdUser);

// if (userInfo.surname) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// console.log(thirdUser.address.city);
// console.log(thirdUser?.address?.street);

// if ('name' in userInfo) {
//   console.log(userInfo.name)
// }

// for (let key in userInfo) {
//   console.log(key);
//   console.log(userInfo[key]);
// }

//Cоздать обьект чайник. У него должны быть свойства: модель/производитель,
//дата производства, срок годности, срок гарантии, цвет, высота, вместимость
//(сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) ,
//сколько раз уже включали чайник и  3 метода - включить чайник, выключить чайник,
//вывести данные о чайнике и очистить данные (очистка значения, сколько раз чайник был включен).

let kettle = {
  model: "bork",
  date: "07.01.2022",
  expiration: "07.01.2026",
  guarantee: "07.01.2023",
  color: "black",
  capacity: 3,
  height: 30,
  condition: "isOff",
  count: 5,
  turnOn() {
    this.condition = "isOn";
    this.count++;
    return this.count; // 
  },
  turnOff() {
    return this.condition = "isOff";
  },
  kettleData() {
    for (let key in kettle) {
      console.log(kettle[key]);
    }
  },
  clearCount() {
    return this.count = 0;
  }
};

console.log(kettle.turnOn());
// console.log(kettle.kettleData());
console.log(kettle.clearCount());
console.log(kettle.kettleData());

console.log(kettle.turnOn());
console.log(kettle.turnOn());
console.log(kettle.turnOn());
console.log(kettle.kettleData());


