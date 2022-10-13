let fruits = ["Яблоко", "Апельсин", "Слива", "Груша", "Банан", "Мандарин"];

for (let i = 0; i < fruits.length; i++) {
  //console.log(i);
  //console.log(fruits[i]);
}

for (let i = fruits.length - 1; i > 0; i--) {
  //console.log(fruits[i]);
  //console.log(i);
}

//ЗАДАЧИ НА СТРОКИ

//0. 
//Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и выводит каждый символ 
//строки в логи.

// циклы + доступ к символам через индекс
function logAllChars(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  };
};

//logAllChars('Привет');

//1. 
//Дана строка 'frontend$developer$wow. Замените все $ на * с помощью глобального поиска и замены.  

function replaceChars(str) {
  return str.replace('$', '*');
};

//replaceChars('frontend$developer$wow');

//2. 
//Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.

let str = 'I am learning frontend development';
const convertStringToArray = (str) => {
  str.split(' ');
};

let result = convertStringToArray(str);

//console.log(result); // ['I', 'am', 'learning', 'frontend', 'development']

//3. 
//Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного 
//количества символов.

const removeSymbols = (str, length) => {
  return str.slice(length);
}

const removeSymbolsSecond = (str, length) => {
  for (let i = 0; i < length; i++) {
    return str[i];
  };
}

//console.log(removeSymbols('development', 5));
//console.log(removeSymbolsSecond('development', 5));

//4. 
//Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет 
//тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
// toUpperCase, split, join

pasteDashesIntoString = (str) => {
  return str.toUpperCase().split('').join('-');
}

//pasteDashesIntoString("Привет");

//5. 
//Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и 
//переводит в нижний регистр.

makeStringLowerCased = (str) => {
  return str.toLowerCase();
}

//makeStringLowerCased(pasteDashesIntoString("привет"))

//6.
//Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с 
//заглавной буквы.

function capitaliseAllWords(str) {
  let wordList = str.split(' ');
  for (let i = 0; i < wordList.length; i++) {
    let arr = wordList[i].split('');
    arr[0] = arr[0].toUpperCase();
    wordList[i] = arr.join('');
  }
  return wordList.join(' ');
}

capitaliseAllWords("hello world");

//7. 
//Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и 
//делает первую букву заглавной.
// обращаться к элементу через индекс

function makeFirstLetterUpperCased(str) {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

//makeFirstLetterUpperCased('ann');

//8. 
//Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и 
//заменяет регистр каждого символа на противоположный. Например, если вводится «Я иЗуЧаЮ ФрОнТеНд», 
//то на выходе должно быть «я ИзУчАю ФрОнТеНд».

function changeLetterRegisterFirst(str) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
      continue;
    }
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
      continue;
    }
    if (arr[i] === ' ') {
      continue;
    }
  }
  console.log(arr.join(''));
}

//changeLetterRegisterFirst('Я иЗуЧаЮ ФрОнТеНд');

//9. 
//Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает 
//в ней все символы разного регистра по порядку. Например, если вводится «джаваскрипт», 
//то на выходе должно быть «дЖаВаСкРиПт».

function changeLetterRegister(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (!(i % 2)) {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('');
}
changeLetterRegister('«джаваскрипт»')

//10.
//Напишите функцию addZeros(num, len, sign), которая дополняет нулями до указаной длины 
//числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function addZeros(num, len, sign) {
  console.log(typeof (num));
  let str2 = String(num);
  let arr = str2.split('');
  if (len > arr.length) {
    for (let i = arr.length; i < arr.length + len - arr.length; i++) {
      arr.push(0);
    }
  }
  return arr.join('')
}

//console.log(addZeros(231, 8, "+"));

//11. 
//Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

const compareStrings = (str1, str2) => {
  return (str1.toLowerCase() === str2.toLowerCase());
}

//console.log(compareStrings('string', 'StRiNg')); // true
//console.log(compareStrings('JavaScript', 'JavaScriptonite'));   // false

//12. 
//Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 
// сначала реализовать черед метод repeat, потом самим через циклnewArr = [];

function repeatStr(str, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(str);
  }
  return newArr;
}

//console.log(repeatStr('b', 6))

//13. 
//Напишите функцию getPathname(pathname), которая находит имя файла (подстрока после последнего 
//символа "\" ) из полного пути к файлу.

const pathname = "/home/user/landing/index.js";

const getPathname = (pathname) => {
  let index
  let arr = pathname.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '/') {
      index = i;
    }
  }
  pathname = arr.join('').slice(index + 1);
  return pathname;
};

//console.log(getPathname(pathname)); // index.js

//14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки, 
//расположенную после или до указанного символа char в зависимости от параметра pos.

function getSubstring(str, char, pos) {
  let arr = str.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char && pos === 'after') {
      newArr.push(arr.splice(i, arr.length - 1));
      //console.log(newArr);
    }
    if (arr[i] === char && pos === 'before') {
      newArr.push(arr.splice(0, i));
      //console.log(newArr);
    }
  }
  return newArr;
};

//console.log(getSubstring('Javascript — синхронный язык программирования', '—', 'before'));
//console.log(getSubstring('Javascript — синхронный язык программирования', 'язык', 'before')); 


// ЗАДАЧИ НА МАССИВЫ

// 0. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

let arr = [];

for (let i = 1; i <= 9; i++) {
  arr.push(i);
}

str = arr.join('');
// console.log(str);

// 1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:

// x
// xx
// xxx
// xxxx
// xxxxx

arr = [];

for (let i = 0; i < 12; i++) {
  arr.push('x');
  // console.log(arr.join(''));
}

// 2.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Обратите внимание: первый цикл имеет счетчик i, второй j, а если будет еще и третий цикл - то у него счетчик будет переменная k. Это стандартные общепринятые названия, следует пользоваться именно ими.
arr = [];

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    arr = [];
    arr.push(i);
    str = arr.join('');
    // console.log(str);
  }
}

// 3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

arr = [];

for (let i = 1; i <= 5; i++) {
  arr.push('x' + 'x');
  // console.log(arr.join(''));
}

// 4.   Пирамидка с цифрами
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999
arr = [];

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= 3; j++) {
    arr = [];
    arr.push(i);
    str = arr.join('');
    // console.log(str);
  }
}

// 5. Напишите функцию goThroughArray(list), которая проходится по массиву 
// и выводит каждый элемент.

function goThroughArray(list) {
  arr = list.split('');
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// goThroughArray("Hello")

// 6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// 7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

let newArr = arr1.concat(arr2);

//console.log(newArr);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr = [1, 2, 3, 4, 5];
newArr = arr.splice(1, 2);

//console.log(arr);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

arr = [1, 2, 3, 4, 5];
newArr = arr.splice(1, 3);

//console.log(newArr);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

arr = [1, 2, 3, 4, 5];
newArr = arr.splice(3, 0, 'a', 'b', 'c');

//console.log(arr);

// 11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');

//console.log(arr);

// 12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

arr = [3, 4, 1, 2, 7];
// console.log(arr.sort(function (a, b) {
//   return a - b;
// }));

// 13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let myObject = { js: 'test', jq: 'hello', css: 'world' };
arr = [];
for (let item in myObject) {
  arr.push(item);
}
//console.log(arr)

// 14. Дана строка, например, '123456'. 
//Переверните эту строку (сделайте из нее '654321') не используя цикл.
str = '123456';
arr = str.split('').reverse();
newStr = arr.join('');
//console.log(newStr)

// 15. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
//Найдите два решения
str = 'hello';
arr = str.split('');
arr[0] = arr[0].toUpperCase();
//console.log(arr.join(''));

// 16. Проверьте, что строка начинается на http://.

str = 'http://ann-afanaseva.ru';
arr = str.split('')
newArr = arr.splice(0, 7);

//console.log(newArr.join('') === 'http://');

// 17. Проверьте, что строка заканчивается на .html

str = 'index.html';
newArr = str.split('').splice(str.split('').length - 5, str.split('').length);

//console.log(newArr.join('') === '.html')

// 18. Дан массив с числами. Проверьте, что в этом массиве есть число 5. 
//Если есть - выведите 'да', а если нет - выведите 'нет'.

arr = [-5, 0, 3, 4, 7];
let isInArray = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    isInArray = true;
    break;
  } else {
    isInArray = false;
  }
}

if (isInArray) {
  // console.log('yes')
} else {
  //console.log('no')
}

// 19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое 
//число кроме себя самого и единицы. 
//То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
//Если число не делится - выведите 'false', а если делится - выведите 'true'.

let num = 5;
let isPrime = false;

for (let i = 2; i < num; i++) {
  if (!(num % i)) {
    isPrime === false;
  }
  if (num % i) {
    isPrime === true;
    break;
  }
}
//console.log(isPrime);


// 20. Дан массив с числами. 
//Проверьте, есть ли в нем два одинаковых числа подряд. 
//Если есть - выведите 'да', а если нет - выведите 'нет'

arr = [1, 2, 2, 3, 4];
let isSubsequence = false;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === arr[i + 1]) {
    isSubsequence = true;
    break;
  } else {
    isSubsequence = false;
  }
}
console.log(isSubsequence);

// 21. Заполните массив следующим образом: в первый элемент запишите '1', 
//во второй '22', в третий '333' и так далее (два цикла)

arr = [];

for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    arr.push(i);
  }
}
//console.log(arr);

// 22. Дан массив чисел, найдите в нем максимальное число
max = -1;
arr = [4, 2, 2, 3, 1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
//console.log(max);
// 23. Дан массив чисел, найдите в нем минимальное число

min = 10000;
arr = [4, 2, 2, 3, 1, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
}
//console.log(min);

// 24. Дан массив чисел, найдите среднее арифметическое всех чисел
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
//console.log(Sum / arr.length);

// 25.  Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

//   * Описание задачи: Напишите функцию, которая заполняет новый массив 
//предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}

newArr = [];

const fill = (arraySize, value) => {
  for (let i = 0; i < arraySize; i++) {
    newArr.push(value);
  }

  return newArr;
}
//console.log(fill(5, 'a'));

// 26. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. 
//Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

newArr = [];

const reverse = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }

  return newArr;
}

//console.log(reverse([1, 2, 3])); // [3, 2, 1]

// 27. Compact. Напишите функцию, которая очищает массив от нежелательных значений,
//     таких как false, undefined, пустые строки, ноль, null.

//  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений,
//  таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}

newArr = [];

const compact = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != false && arr[i] != undefined && arr[i] != '' && arr[i] != null && arr[i] != 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

//console.log(compact([0, 1, false, 2, undefined, '', 3, null])) // [1, 2, 3]


// 28. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. 
//Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)

//   * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. 
//   Первое значение - ключ, второе - зачение.
//   * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - массив, значения которого массивы пар
//   * @returns {Array}

obj = {};

const fromPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      obj[array[i]] = array[i][j];
    }
  }

  return obj;
}

//console.log(fromPairs([['a', 1], ['b', 2]])) // { 'a': 1, 'b': 2 }


// 29. Without. Напишите функцию, возвращает новый массив без предоставленных значений. 
//Используйте примитивные типы.

//   * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}

function without() {
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[0].length; j++) {
      if (arguments[0][j] === arguments[i]) {
        arguments[0].splice(j, 1);
      }
    }
  }

  return arguments[0];
}

console.log(without([1, 2, 3, 1, 2], 1, 2)); // [3]

// 30. Unique. Напишите функцию, которая убирает повторяющиеся значения.

//   * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
//   * Сложность задачи: 2 of 5
//   * @param {Array<string | number>} array - Массив с примитивными значениями
//   * @returns {Array}
// */

function unique(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(unique([1, 2, 1, 2, 3])); // [1, 2, 3]

// 31. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

//   * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * Сложность задачи: 2 of 5
//   * @param {Array} firstArray - Массив с примитивными значениями
//   * @param {Array} secondArray - Массив с примитивными значениями
//   * @returns {boolean}

const isEqual = (firstArray, secondArray) => {
  let result = false;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      result = (firstArray[i] === secondArray[i]);
    }
  }
  return result;
}

arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];

//console.log(isEqual(arr1, arr2)); // true
//console.log(isEqual(arr1, arr3)); // false
//console.log(isEqual(arr1, arr4)); // false

//1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

arr = [1, 2, 3, 4];
let i = 0;

let displaySequence = (arr) => {
  console.log(arr[i]);
  i++;
  if (i < arr.length) {
    displaySequence(arr);
  }
}

//displaySequence(arr);

//2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
//И так, пока сумма не станет однозначным числом (9 и менее).

num = 557;
i = 0;

let sumSequence = (num) => {
  let sum = 0;
  arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  };
  if (sum > 9) {
    return sumSequence(sum);
  };
  return sum;
}

console.log(sumSequence(num));