'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = prompt("Желаемое ко-во дроидов для покупки");
let message;


if (totalPrice === null) { console.log("Отменено пользователем!") } else {
    totalPrice = Number(totalPrice) * pricePerDroid; console.log("Сумма покупки");
    if (credits > totalPrice) { message = `Вы купили ${totalPrice / pricePerDroid} дроида-(ов), на счету осталось ${credits - totalPrice} кредитов.` }
    else { message = "Недостаточно средств на счету!" }
}

console.log(totalPrice);
console.log( message);
