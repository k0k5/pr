"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const books = [
    (0, library_1.createBook)("1984", "Джордж Оруэлл", 1949),
    (0, library_1.createBook)("Мастер и Маргарита", "Михаил Булгаков", 1967),
    (0, library_1.createBook)("Преступление и наказание", "Фёдор Достоевский", 1866),
];
//проверка на существование наших книг в массиве
if (books[0] && books[2]) {
    books[0] = (0, library_1.markAsRead)(books[0]);
    books[2] = (0, library_1.markAsRead)(books[2]);
}
books.forEach(book => console.log((0, library_1.getBookInfo)(book)));
console.log(`Прочитано книг: ${(0, library_1.countReadBooks)(books)}`);
let studentName = "Анна";
let studentAge = 20;
let isEnrolled = true;
let middleName = null;
let hobby = undefined;
let city = "Москва"; // string
let population = 12_000_000; // number
let isCapital = true; // boolean
// Ошибка 1: присвоение числа строковой переменной
let title = "Книга";
title = '123'; // Type 'number' is not assignable to type 'string'.
// Ошибка 2: присвоение строки числовой переменной
let pages = 300;
pages = 5; // Type 'string' is not assignable to type 'number'.
// Ошибка 3: присвоение числа булевой переменной
let isRead = false;
isRead = true; // Type 'number' is not assignable to type 'boolean'.
// let userName: string = null;
// 3 ==============================
function formatPrice(value) {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function logMessage(message) {
    console.log(message);
}
function repeat(text, times = 2) {
    return text.repeat(times);
}
function describeUser(name, age) {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}
// Корректные вызовы
console.log(formatPrice(1234.5)); // "1 234,50 ₽"
console.log(clamp(15, 0, 10)); // 10
logMessage("Привет"); // "Привет"
console.log(repeat("abc")); // "abcabc"
console.log(describeUser("Иван")); // "Иван"
console.log(describeUser("Иван", 25)); // "Иван, возраст: 25"
// // Некорректные вызовы
// formatPrice("100"); // Argument of type 'string' is not assignable to parameter of type 'number'.
// clamp(5, 0); // Expected 3 arguments, but got 2.
// logMessage(123); // Argument of type 'number' is not assignable to parameter of type 'string'.
