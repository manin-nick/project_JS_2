// Базовые операторы
// Задача: Арифметические операции
let x = 8;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Задача: Инкремент и декремент
let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);

// Задача: Операторы присваивания
let num = 5;
num += 3;
num -= 2;
console.log(num);

// Математика
// Задача: Округление чисел
let price = 19.99;
price = Math.round(price);
console.log(price);

// Задача: Возведение в степень
let base = 3;
let exponent = 4;
console.log(Math.pow(base, exponent));

// Задача: Поиск минимального и максимального значения

let a = 5;
let b = 9;
let c = 3;
console.log(Math.max(a, b, c));
console.log(Math.min(a, b, c));

// Операторы сравнения
// Задача: Сравнение чисел
let A = 10;
let B = 20;
console.log(A >= B);

// Задача: Проверка равенства
let firstName = "John";
let lastName = "John";
console.log(firstName == lastName);
// true, потому что обе переменные строковые, и у обеих переменных одинаковое значение John

// Задача: Проверка неравенства
let age = 18;
console.log(age != 21);

// Логические операторы
// Задача: Использование оператора AND (&&)
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);

// Задача: Использование оператора OR (||)
let isMember = false;
let isGuest = true;
console.log(isMember || isGuest);

// Задача: Использование оператора NOT (!)
let isOnline = true;
isOnline = !isOnline;
console.log(isOnline);