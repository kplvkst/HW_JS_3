// Task 2.

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только  уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании.


const fs = require('fs')
const users = JSON.parse(fs.readFileSync("./task2.json"))

// Вариант решения №1

// let uniquePersons = []
// users.forEach((e1) => {
//     if (uniquePersons.indexOf(JSON.stringify(e1)) === -1) {
//         uniquePersons.push(JSON.stringify(e1));
//     }
// });
// console.log (uniquePersons);


// Вариант решения №2

let chekid = Array.from(new Set(users.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
console.log(chekid);
