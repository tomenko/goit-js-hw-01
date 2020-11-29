'use strict';
const total = 100;
const ordered = 200;
/* let result; */

/* if (ordered <= total) { result = "Заказ оформлен, с вами свяжется менеджер." } 
else { result = "На складе недостаточно твоаров!" } */

const result = ordered <= total ? "Заказ оформлен, с вами свяжется менеджер." : "На складе недостаточно твоаров!";

console.log(result);