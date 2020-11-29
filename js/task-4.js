'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = prompt("Желаемое ко-во дроидов для покупки");
let message;

if (totalPrice === null) { totalPrice = "Отменено пользователем!" }
else if (totalPrice = Number(totalPrice) * pricePerDroid) { totalPrice = totalPrice; console.log("Сумма покупки") }

if (credits < totalPrice) { message = "Недостаточно средств на счету!" }
else if (credits >= totalPrice) { message = `Вы купили ${totalPrice / pricePerDroid} дроида-(ов), на счету осталось ${credits - totalPrice} кредитов.` }

console.log(totalPrice);
console.log(message);
