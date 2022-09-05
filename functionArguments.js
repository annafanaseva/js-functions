//"Задача 1. Напишите функцию, которая принимает произвольное количество аргументов в виде 
//строк и выводит их через пробел с помощью document.write() в тело html-документа. 
//Например, функция  showWords(""I've"", ""been"", ""learning"", ""JavaScript"", ""for"", ""a"", ""month"") 
//должна вывести фразу ""I've been learning JavaScript for a month"".

function showWords() {
  for (var i = 0; i < arguments.length; i++) {
    document.write(arguments[i] + " ");
  }
};

showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");

//Задача 2. Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и 
//возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове 
//complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483."

function complexDigit() {
  for (var i = 0; i < arguments.length; i++) {
    document.write(arguments[i]);
  }
};

complexDigit(3, 6, 7);